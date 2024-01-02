import{a as p,d as y,g as b,l as w,f as S,b as v,G as k}from"./get-81296add.js";import{f as T,k as h,I as C,l as I}from"./vendor-a1812e4c.js";function f(){return{id:"",name:"",alpine_name:""}}function A(){let t=T(new Date,"yyyy-MM-dd HH:mm");return{description:"",amount:"",currency_code:"EUR",foreign_amount:"",foreign_currency_code:"",source_account:f(),destination_account:f(),budget_id:null,category_name:"",piggy_bank_id:null,date:t,errors:{amount:[],foreign_amount:[],budget_id:[],category_name:[],piggy_bank_id:[]}}}function x(e,t){let r=[];for(let o in e)if(e.hasOwnProperty(o)){const n=e[o];let s={};s.description=n.description,s.source_name=n.source_account.name,s.destination_name=n.destination_account.name,s.amount=n.amount,s.currency_code=n.currency_code,s.date=n.date,s.budget_id=n.budget_id,s.category_name=n.category_name,s.piggy_bank_id=n.piggy_bank_id,typeof n.foreign_currency_code<"u"&&n.foreign_currency_code.toString()!==""&&(s.foreign_currency_code=n.foreign_currency_code,typeof n.foreign_amount<"u"&&n.foreign_amount.toString()!==""&&(s.foreign_amount=n.foreign_amount),(typeof n.foreign_amount>"u"||n.foreign_amount.toString()==="")&&(delete s.foreign_amount,delete s.foreign_currency_code)),typeof n.source_account.id<"u"&&n.source_account.id.toString()!==""&&(s.source_id=n.source_account.id),typeof n.destination_account.id<"u"&&n.destination_account.id.toString()!==""&&(s.destination_id=n.destination_account.id),s.type=t,r.push(s)}return r}let O=class{post(t){let r="/api/v2/transactions";return p.post(r,t)}};class E{post(t,r,o){let n="/api/v1/attachments";return p.post(n,{filename:t,attachable_type:r,attachable_id:o})}upload(t,r){let o="./api/v1/attachments/"+t+"/upload";return axios.post(o,r)}}let B=class{list(t){return p.get("/api/v2/currencies",{params:t})}};class P{list(t){return p.get("/api/v2/budgets",{params:t})}}let l;const d={description:"/api/v2/autocomplete/transaction-descriptions",account:"/api/v2/autocomplete/accounts",category:"/api/v2/autocomplete/categories",tag:"/api/v2/autocomplete/tags"};let L=function(e,t){console.log("Now in uploadAttachments"),t=t.reverse();let r=[],o=0,n=[],s=document.querySelectorAll('input[name="attachments[]"]');console.log(s);for(const a in s)if(s.hasOwnProperty(a)&&/^0$|^[1-9]\d*$/.test(a)&&a<=4294967294){console.log("Now at attachment #"+a);for(const i in s[a].files)s[a].files.hasOwnProperty(i)&&/^0$|^[1-9]\d*$/.test(i)&&i<=4294967294&&(console.log("Will upload #"+i+" from attachment #"+a+" to transaction #"+t[a].transaction_journal_id),r.push({journal:t[a].transaction_journal_id,file:s[a].files[i]}),o++)}console.log("Found "+o+" attachments.");for(const a in r)r.hasOwnProperty(a)&&/^0$|^[1-9]\d*$/.test(a)&&a<=4294967294&&(console.log("Create file reader for file #"+a),function(i,c){let u=new FileReader;u.onloadend=function(g){g.target.readyState===FileReader.DONE&&(console.log("Done reading file  #"+c),n.push({name:r[c].file.name,journal:r[c].journal,content:new Blob([g.target.result])}),n.length===o&&(console.log("Done reading file #"+c),F(n,e)))},u.readAsArrayBuffer(i.file)}(r[a],a));return o},F=function(e,t){let r=e.length,o=0;console.log("Will now upload "+r+" file(s) to journal with id #"+t);for(const n in e)if(e.hasOwnProperty(n)&&/^0$|^[1-9]\d*$/.test(n)&&n<=4294967294){console.log("Creating attachment #"+n);let s=new E;s.post(e[n].name,"TransactionJournal",e[n].journal).then(a=>{let i=parseInt(a.data.data.id);console.log("Created attachment #"+i+" for key #"+n),console.log("Uploading attachment #"+n),s.upload(i,e[n].content).then(c=>{if(o++,o===r){console.log("FINAL UPLOAD, redirect user to new transaction or reset form or whatever.");const u=new CustomEvent("upload-success",{some:"details"});document.dispatchEvent(u);return}console.log("Upload complete!")}).catch(c=>{console.error("Could not upload"),console.error(c),o++,o===r&&console.log("FINAL UPLOAD, redirect user to new transaction or reset form or whatever.")})}).catch(a=>{console.error("Could not create upload."),console.error(a),o++,o===r&&console.log("FINAL UPLOAD, redirect user to new transaction or reset form or whatever.")})}},M=function(){return{count:0,totalAmount:0,transactionType:"unknown",showSuccessMessage:!1,showErrorMessage:!1,defaultCurrency:{},entries:[],loadingCurrencies:!0,loadingBudgets:!0,loadingPiggyBanks:!0,loadingSubscriptions:!0,enabledCurrencies:[],nativeCurrencies:[],foreignCurrencies:[],budgets:[],piggyBanks:{},subscriptions:[],foreignAmountEnabled:!0,filters:{source:[],destination:[]},errorMessageText:"",successMessageLink:"#",successMessageText:"",showError:!1,showSuccess:!1,showWaitMessage:!1,returnHereButton:!0,resetButton:!1,resetButtonEnabled:!1,rulesButton:!0,webhookButton:!0,submitting:!1,newGroupTitle:"",newGroupId:0,detectTransactionType(){const e=this.entries[0].source_account.type??"unknown",t=this.entries[0].destination_account.type??"unknown";if(e==="unknown"&&t==="unknown"){this.transactionType="unknown",console.warn("Cannot infer transaction type from two unknown accounts.");return}if(e===t&&["Asset account","Loan","Debt","Mortgage"].includes(e)){this.transactionType="transfer",console.log('Transaction type is detected to be "'+this.transactionType+'".'),console.log("filter down currencies for transfer."),this.filterNativeCurrencies(this.entries[0].source_account.currency_code),this.filterForeignCurrencies(this.entries[0].destination_account.currency_code);return}if(e==="Asset account"&&["Expense account","Debt","Loan","Mortgage"].includes(t)){this.transactionType="withdrawal",console.log('[a] Transaction type is detected to be "'+this.transactionType+'".'),this.filterNativeCurrencies(this.entries[0].source_account.currency_code);return}if(e==="Asset account"&&t==="unknown"){this.transactionType="withdrawal",console.log('[b] Transaction type is detected to be "'+this.transactionType+'".'),console.log(this.entries[0].source_account),this.filterNativeCurrencies(this.entries[0].source_account.currency_code);return}if(["Debt","Loan","Mortgage"].includes(e)&&t==="Expense account"){this.transactionType="withdrawal",console.log('[c] Transaction type is detected to be "'+this.transactionType+'".'),this.filterNativeCurrencies(this.entries[0].source_account.currency_code);return}if(e==="Revenue account"&&["Asset account","Debt","Loan","Mortgage"].includes(t)){this.transactionType="deposit",console.log('Transaction type is detected to be "'+this.transactionType+'".');return}if(["Debt","Loan","Mortgage"].includes(e)&&t==="Asset account"){this.transactionType="deposit",console.log('Transaction type is detected to be "'+this.transactionType+'".');return}console.warn('Unknown account combination between "'+e+'" and "'+t+'".')},selectSourceAccount(e,t){const r=parseInt(t._searchInput.attributes["data-index"].value);document.querySelector("#form")._x_dataStack[0].$data.entries[r].source_account={id:e.id,name:e.name,alpine_name:e.name,type:e.type,currency_code:e.currency_code},console.log("Changed source account into a known "+e.type.toLowerCase()),document.querySelector("#form")._x_dataStack[0].detectTransactionType()},filterForeignCurrencies(e){console.log('filterForeignCurrencies("'+e+'")');let t=[],r;for(let o in this.enabledCurrencies)if(this.enabledCurrencies.hasOwnProperty(o)){let n=this.enabledCurrencies[o];n.code===e&&(r=n)}t.push(r),this.foreignCurrencies=t,t.length===1&&t[0].code===this.entries[0].source_account.currency_code&&(console.log("Foreign currency is same as source currency. Disable foreign amount."),this.foreignAmountEnabled=!1),t.length===1&&t[0].code!==this.entries[0].source_account.currency_code&&(console.log("Foreign currency is NOT same as source currency. Enable foreign amount."),this.foreignAmountEnabled=!0);for(let o in this.entries)this.entries.hasOwnProperty(o)&&(this.entries[o].foreign_currency_code=e)},filterNativeCurrencies(e){console.log('filterNativeCurrencies("'+e+'")');let t=[],r;for(let o in this.enabledCurrencies)if(this.enabledCurrencies.hasOwnProperty(o)){let n=this.enabledCurrencies[o];n.code===e&&(r=n)}t.push(r),this.nativeCurrencies=t;for(let o in this.entries)this.entries.hasOwnProperty(o)&&(this.entries[o].currency_code=e)},changedAmount(e){const t=parseInt(e.target.dataset.index);this.entries[t].amount=parseFloat(e.target.value),this.totalAmount=0;for(let r in this.entries)this.entries.hasOwnProperty(r)&&(this.totalAmount=this.totalAmount+parseFloat(this.entries[r].amount));console.log("Changed amount to "+this.totalAmount)},selectDestAccount(e,t){const r=parseInt(t._searchInput.attributes["data-index"].value);document.querySelector("#form")._x_dataStack[0].$data.entries[r].destination_account={id:e.id,name:e.name,alpine_name:e.name,type:e.type,currency_code:e.currency_code},console.log("Changed destination account into a known "+e.type.toLowerCase()),document.querySelector("#form")._x_dataStack[0].detectTransactionType()},loadCurrencies(){this.enabledCurrencies=[],this.nativeCurrencies=[],this.foreignCurrencies=[],this.foreignCurrencies.push({id:0,name:"(no foreign currency)",code:"",default:!1,symbol:"",decimal_places:2}),console.log("Loading user currencies."),new B().list({}).then(t=>{for(let r in t.data.data)if(t.data.data.hasOwnProperty(r)){let o=t.data.data[r];if(o.attributes.enabled){let n={id:o.id,name:o.attributes.name,code:o.attributes.code,default:o.attributes.default,symbol:o.attributes.symbol,decimal_places:o.attributes.decimal_places};n.default&&(this.defaultCurrency=n),this.enabledCurrencies.push(n),this.nativeCurrencies.push(n),this.foreignCurrencies.push(n)}}this.loadingCurrencies=!1})},loadBudgets(){this.budgets=[],this.budgets.push({id:0,name:"(no budget)"}),console.log("Loading user budgets."),new P().list({}).then(t=>{for(let r in t.data.data)if(t.data.data.hasOwnProperty(r)){let o=t.data.data[r],n={id:o.id,name:o.attributes.name};this.budgets.push(n)}this.loadingBudgets=!1,console.log(this.budgets)})},loadPiggyBanks(){this.piggyBanks={};let e={0:{id:0,name:"(no group)",order:0,piggyBanks:[{id:0,name:"(no piggy bank)",order:0}]}};console.log("Loading user piggy banks."),new v().list({}).then(r=>{for(let o in r.data.data)if(r.data.data.hasOwnProperty(o)){let n=r.data.data[o],s=n.attributes.object_group_id??"0",a=n.attributes.object_group_title??"(no group)",i={id:n.id,name:n.attributes.name,order:n.attributes.order};e.hasOwnProperty(s)||(e[s]={id:s,name:a,order:n.attributes.object_group_order??0,piggyBanks:[]}),e[s].piggyBanks.push(i),e[s].piggyBanks.sort((c,u)=>c.order-u.order)}this.loadingPiggyBanks=!1,this.piggyBanks=Object.keys(e).sort().reduce((o,n)=>(o[n]=e[n],o),{})})},loadSubscriptions(){this.subscriptions={};let e={0:{id:0,name:"(no group)",order:0,subscriptions:[{id:0,name:"(no subscription)",order:0}]}};console.log("Loading user suscriptions."),new k().list({}).then(r=>{for(let o in r.data.data)if(r.data.data.hasOwnProperty(o)){let n=r.data.data[o],s=n.attributes.object_group_id??"0",a=n.attributes.object_group_title??"(no group)",i={id:n.id,name:n.attributes.name,order:n.attributes.order};e.hasOwnProperty(s)||(e[s]={id:s,name:a,order:n.attributes.object_group_order??0,subscriptions:[]}),e[s].subscriptions.push(i),e[s].subscriptions.sort((c,u)=>c.order-u.order)}this.loadingSubscriptions=!1,this.subscriptions=Object.keys(e).sort().reduce((o,n)=>(o[n]=e[n],o),{})})},changeSourceAccount(e,t){if(console.log("changeSourceAccount"),typeof e>"u"){const r=parseInt(t._searchInput.attributes["data-index"].value);if(document.querySelector("#form")._x_dataStack[0].$data.entries[r].source_account.name===t._searchInput.value){console.warn('Ignore hallucinated source account name change to "'+t._searchInput.value+'"'),document.querySelector("#form")._x_dataStack[0].detectTransactionType();return}document.querySelector("#form")._x_dataStack[0].$data.entries[r].source_account={name:t._searchInput.value,alpine_name:t._searchInput.value},console.log('Changed source account into a unknown account called "'+t._searchInput.value+'"'),document.querySelector("#form")._x_dataStack[0].detectTransactionType()}},changeDestAccount(e,t){if(document.querySelector("#form")._x_dataStack[0].$data.entries[0].destination_account,typeof e>"u"){const r=parseInt(t._searchInput.attributes["data-index"].value);if(document.querySelector("#form")._x_dataStack[0].$data.entries[r].destination_account.name===t._searchInput.value){console.warn('Ignore hallucinated destination account name change to "'+t._searchInput.value+'"'),document.querySelector("#form")._x_dataStack[0].detectTransactionType();return}document.querySelector("#form")._x_dataStack[0].$data.entries[r].destination_account={name:t._searchInput.value,alpine_name:t._searchInput.value},console.log('Changed destination account into a unknown account called "'+t._searchInput.value+'"'),document.querySelector("#form")._x_dataStack[0].detectTransactionType()}},changeCategory(e,t){const r=parseInt(t._searchInput.attributes["data-index"].value);if(typeof e<"u"&&e.name){document.querySelector("#form")._x_dataStack[0].$data.entries[r].category_name=e.name;return}document.querySelector("#form")._x_dataStack[0].$data.entries[r].category_name=t._searchInput.value},changeDescription(e,t){const r=parseInt(t._searchInput.attributes["data-index"].value);if(typeof e<"u"&&e.description){document.querySelector("#form")._x_dataStack[0].$data.entries[r].description=e.description;return}document.querySelector("#form")._x_dataStack[0].$data.entries[r].description=t._searchInput.value},addedSplit(){console.log("addedSplit"),h.init("input.ac-source",{server:d.account,serverParams:{types:this.filters.source},fetchOptions:{headers:{"X-CSRF-TOKEN":document.head.querySelector('meta[name="csrf-token"]').content}},hiddenInput:!0,preventBrowserAutocomplete:!0,highlightTyped:!0,liveServer:!0,onChange:this.changeSourceAccount,onSelectItem:this.selectSourceAccount,onRenderItem:function(e,t,r){return e.name_with_balance+'<br><small class="text-muted">'+l.t("firefly.account_type_"+e.type)+"</small>"}}),h.init("input.ac-category",{server:d.category,fetchOptions:{headers:{"X-CSRF-TOKEN":document.head.querySelector('meta[name="csrf-token"]').content}},valueField:"id",labelField:"name",highlightTyped:!0,onSelectItem:this.changeCategory,onChange:this.changeCategory}),h.init("input.ac-dest",{server:d.account,serverParams:{types:this.filters.destination},fetchOptions:{headers:{"X-CSRF-TOKEN":document.head.querySelector('meta[name="csrf-token"]').content}},hiddenInput:!0,preventBrowserAutocomplete:!0,liveServer:!0,highlightTyped:!0,onSelectItem:this.selectDestAccount,onChange:this.changeDestAccount,onRenderItem:function(e,t,r){return e.name_with_balance+'<br><small class="text-muted">'+l.t("firefly.account_type_"+e.type)+"</small>"}}),this.filters.destination=[],h.init("input.ac-description",{server:d.description,fetchOptions:{headers:{"X-CSRF-TOKEN":document.head.querySelector('meta[name="csrf-token"]').content}},valueField:"id",labelField:"description",highlightTyped:!0,onSelectItem:this.changeDescription,onChange:this.changeDescription})},processUpload(e){console.log("I am ALSO event listener for upload-success!"),console.log(e),this.showBarOrRedirect()},init(){Promise.all([b("language","en_US")]).then(e=>{l=new C;const t=e[0].replace("-","_");l.locale=t,w(l,t).then(()=>{this.addSplit()})}),this.loadCurrencies(),this.loadBudgets(),this.loadPiggyBanks(),this.loadSubscriptions(),document.addEventListener("upload-success",e=>{this.processUpload(e)}),this.filters.source=["Asset account","Loan","Debt","Mortgage","Revenue account"],this.filters.destination=["Expense account","Loan","Debt","Mortgage","Asset account"]},submitTransaction(){this.submitting=!0,this.showSuccessMessage=!1,this.showErrorMessage=!1,this.showWaitmessage=!1,this.detectTransactionType();let e=x(this.entries,this.transactionType),t={group_title:null,fire_webhooks:!1,apply_rules:!1,transactions:e};e.length>1&&(t.group_title=e[0].description);let r=new O;console.log(t),r.post(t).then(o=>{if(this.newGroupId=parseInt(o.data.data.id),this.newGroupTitle=t.group_title??t.transactions[0].description,L(this.newGroupId,o.data.data.attributes.transactions)>0){this.showWaitMessage=!0;return}this.showBarOrRedirect()}).catch(o=>{this.submitting=!1,console.log(o),typeof o.response<"u"&&this.parseErrors(o.response.data)})},showBarOrRedirect(){this.showWaitMessage=!1,this.submitting=!1,this.returnHereButton&&(this.showSuccessMessage=!0,this.successMessageLink="transactions/show/"+this.newGroupId,this.successMessageText=l.t("firefly.stored_journal_js",{description:this.newGroupTitle}),this.resetButton&&(this.entries=[],this.addSplit(),this.totalAmount=0)),this.returnHereButton||(window.location="transactions/show/"+this.newGroupId+"?transaction_group_id="+this.newGroupId+"&message=created")},parseErrors(e){this.setDefaultErrors(),this.showErrorMessage=!0,this.showSuccessMessage=!1,this.errorMessageText=l.t("firefly.errors_submission")+" "+e.message;let t,r;for(const o in e.errors)if(e.errors.hasOwnProperty(o)){if(o!=="group_title")switch(t=parseInt(o.split(".")[1]),r=o.split(".")[2],r){case"amount":case"date":case"budget_id":case"bill_id":case"description":case"tags":this.entries[t].errors[r]=e.errors[o];break;case"source_name":case"source_id":this.entries[t].errors.source_account=this.entries[t].errors.source_account.concat(e.errors[o]);break;case"destination_name":case"destination_id":this.entries[t].errors.destination_account=this.entries[t].errors.destination_account.concat(e.errors[o]);break;case"foreign_amount":case"foreign_currency_id":this.entries[t].errors.foreign_amount=this.entries[t].errors.foreign_amount.concat(e.errors[o]);break}typeof this.entries[t]<"u"&&(this.entries[t].errors.source_account=Array.from(new Set(this.entries[t].errors.source_account)),this.entries[t].errors.destination_account=Array.from(new Set(this.entries[t].errors.destination_account)))}console.log(this.entries[0].errors)},setDefaultErrors(){},addSplit(){this.entries.push(A()),setTimeout(()=>{I.init("select.ac-tags",{allowClear:!0,server:d.tag,liveServer:!0,clearEnd:!0,notFoundMessage:"(nothing found)",noCache:!0,fetchOptions:{headers:{"X-CSRF-TOKEN":document.head.querySelector('meta[name="csrf-token"]').content}}})},250)},removeSplit(e){this.entries.splice(e,1),document.querySelector("#split-0-tab").click()},formattedTotalAmount(){return S(this.totalAmount,"EUR")}}},m={transactions:M,dates:y};function _(){Object.keys(m).forEach(e=>{console.log(`Loading page component "${e}"`);let t=m[e]();Alpine.data(e,()=>t)}),Alpine.start()}document.addEventListener("upload-success",e=>{console.log("I am event listener for upload-success"),console.log(e)});document.addEventListener("firefly-iii-bootstrapped",()=>{console.log("Loaded through event listener."),_()});window.bootstrapped&&(console.log("Loaded through window variable."),_());