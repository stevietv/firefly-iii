<?php

/**
 * form.php
 * Copyright (c) 2019 james@firefly-iii.org
 *
 * This file is part of Firefly III (https://github.com/firefly-iii).
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

/*
 * PLEASE DO NOT EDIT THIS FILE DIRECTLY.
 * YOUR CHANGES WILL BE OVERWRITTEN!
 * YOUR PR WITH CHANGES TO THIS FILE WILL BE REJECTED!
 *
 * GO TO CROWDIN TO FIX OR CHANGE TRANSLATIONS!
 *
 * https://crowdin.com/project/firefly-iii
 * 
 */


declare(strict_types=1);

return [
    // new user:
    'bank_name'                   => 'Nom del banc',
    'bank_balance'                => 'Saldo',
    'savings_balance'             => 'Saldo d\'estalvis',
    'credit_card_limit'           => 'Límit de la targeta de crèdit',
    'automatch'                   => 'Coincidir automàticament',
    'skip'                        => 'Ometre',
    'enabled'                     => 'Activat',
    'name'                        => 'Nom',
    'active'                      => 'Actiu',
    'amount_min'                  => 'Import mínim',
    'amount_max'                  => 'Import màxim',
    'match'                       => 'Coincideix en',
    'strict'                      => 'Mode estricte',
    'repeat_freq'                 => 'Repeticions',
    'object_group'                => 'Grup',
    'location'                    => 'Ubicació',
    'update_channel'              => 'Canal d\'actualitzacions',
    'currency_id'                 => 'Moneda',
    'transaction_currency_id'     => 'Moneda',
    'auto_budget_currency_id'     => 'Moneda',
    'external_ip'                 => 'IP externa del servidor',
    'attachments'                 => 'Adjunts',
    'BIC'                         => 'BIC',
    'verify_password'             => 'Verificar la seguretat de la contrasenya',
    'source_account'              => 'Compte d\'origen',
    'destination_account'         => 'Compte de destí',
    'asset_destination_account'   => 'Compte de destí',
    'include_net_worth'           => 'Incloure en valor net',
    'asset_source_account'        => 'Compte d\'origen',
    'journal_description'         => 'Descripció',
    'note'                        => 'Notes',
    'currency'                    => 'Moneda',
    'account_id'                  => 'Compte d\'actiu',
    'budget_id'                   => 'Pressupost',
    'bill_id'                     => 'Factura',
    'opening_balance'             => 'Saldo inicial',
    'tagMode'                     => 'Mode d\'etiqueta',
    'virtual_balance'             => 'Saldo virtual',

/*
 * PLEASE DO NOT EDIT THIS FILE DIRECTLY.
 * YOUR CHANGES WILL BE OVERWRITTEN!
 * YOUR PR WITH CHANGES TO THIS FILE WILL BE REJECTED!
 *
 * GO TO CROWDIN TO FIX OR CHANGE TRANSLATIONS!
 *
 * https://crowdin.com/project/firefly-iii
 * 
 */


    'targetamount'                => 'Quantitat objectiu',
    'account_role'                => 'Rol del compte',
    'opening_balance_date'        => 'Data del saldo inicial',
    'cc_type'                     => 'Pla de pagament de la targeta de crèdit',
    'cc_monthly_payment_date'     => 'Data de pagament mensual de la targeta de crèdit',
    'piggy_bank_id'               => 'Guardiola',
    'returnHere'                  => 'Tornar aquí',
    'returnHereExplanation'       => 'Després de guardar, torna aquí per crear-ne un altre.',
    'returnHereUpdateExplanation' => 'Després d\'actualitzar, torna aquí.',
    'description'                 => 'Descripció',
    'expense_account'             => 'Compte de despeses',
    'revenue_account'             => 'Compte de beneficis',
    'decimal_places'              => 'Nombre de decimals',
    'destination_amount'          => 'Import (destí)',
    'new_email_address'           => 'Nova adreça de correu electrònic',
    'verification'                => 'Verificació',
    'api_key'                     => 'Clau API',
    'remember_me'                 => 'Recorda\'m',
    'liability_type_id'           => 'Tipus de passiu',
    'liability_type'              => 'Tipus de passiu',
    'interest'                    => 'Interès',
    'interest_period'             => 'Període d\'interès',
    'extension_date'              => 'Data d\'extensió',
    'type'                        => 'Tipus',
    'convert_Withdrawal'          => 'Convertir retirada',
    'convert_Deposit'             => 'Convertir dipòsit',
    'convert_Transfer'            => 'Convertir transferència',
    'amount'                      => 'Import',
    'foreign_amount'              => 'Import estranger',
    'date'                        => 'Data',
    'interest_date'               => 'Data d\'interès',
    'book_date'                   => 'Data de registre',
    'process_date'                => 'Data de processament',
    'category'                    => 'Categoria',
    'tags'                        => 'Etiquetes',
    'deletePermanently'           => 'Eliminar permanentment',
    'cancel'                      => 'Cancel·lar',
    'targetdate'                  => 'Data objectiu',
    'startdate'                   => 'Data d\'inici',
    'tag'                         => 'Etiqueta',
    'under'                       => 'Per sota',
    'symbol'                      => 'Símbol',
    'code'                        => 'Codi',
    'iban'                        => 'IBAN',
    'account_number'              => 'Número de compte',
    'creditCardNumber'            => 'Número de la targeta de crèdit',
    'has_headers'                 => 'Capçaleres',
    'date_format'                 => 'Format de data',
    'specifix'                    => 'Banc- o fitxer de solucions específiques',
    'attachments[]'               => 'Adjunts',
    'title'                       => 'Títol',
    'notes'                       => 'Notes',
    'filename'                    => 'Nom del fitxer',
    'mime'                        => 'Tipus MIME',
    'size'                        => 'Mida',
    'trigger'                     => 'Activador',
    'stop_processing'             => 'Aturar el processament',
    'start_date'                  => 'Inici del rang',
    'end_date'                    => 'Fi del rang',
    'enddate'                     => 'Data de fi',
    'start'                       => 'Inici del rang',
    'end'                         => 'Fi del rang',
    'delete_account'              => 'Eliminar compte ":name"',
    'delete_webhook'              => 'Eliminar webhook ":title"',
    'delete_bill'                 => 'Eliminar factura ":name"',
    'delete_budget'               => 'Eliminar pressupost ":name"',
    'delete_category'             => 'Eliminar categoria ":name"',
    'delete_currency'             => 'Eliminar moneda ":name"',
    'delete_journal'              => 'Eliminar transacció amb descripció ":description"',
    'delete_attachment'           => 'Eliminar adjunt ":name"',
    'delete_rule'                 => 'Eliminar regla ":title"',
    'delete_rule_group'           => 'Eliminar grup de regles ":title"',
    'delete_link_type'            => 'Eliminar tipus d\'enllaç ":name"',
    'delete_user'                 => 'Eliminar usuari ":email"',
    'delete_recurring'            => 'Eliminar transacció periòdica ":title"',
    'user_areYouSure'             => 'Si elimines l\'usuari ":email", desapareixerà tot. No hi ha marxa enrere, desfer ni res. Si t\'elimines a tu mateix, perdràs l\'accés a aquesta instància de Firefly III.',
    'attachment_areYouSure'       => 'Estàs segur que vols eliminar l\'arxiu adjunt anomenat ":name"?',
    'account_areYouSure'          => 'Estàs segur que vols eliminar el compte anomenat ":name"?',
    'account_areYouSure_js'       => 'Estàs segur que vols eliminar l\'arxiu adjunt anomenat "{name}"?',
    'bill_areYouSure'             => 'Estàs segur que vols eliminar la factura anomenada ":name"?',
    'rule_areYouSure'             => 'Estàs segur que vols eliminar la regla anomenada ":title"?',
    'object_group_areYouSure'     => 'Estàs segur que vols eliminar el grup anomenat ":title"?',
    'ruleGroup_areYouSure'        => 'Estàs segur que vols eliminar el grup de regles anomenat ":title"?',
    'budget_areYouSure'           => 'Estàs segur que vols eliminar el pressupost anomenat ":name"?',
    'webhook_areYouSure'           => 'Estàs segur que vols eliminar el webhook anomenat ":title"?',
    'category_areYouSure'         => 'Estàs segur que vols eliminar la categoria anomenada ":name"?',
    'recurring_areYouSure'        => 'Estàs segur que vols eliminar la transacció periòdica anomenada ":title"?',
    'currency_areYouSure'         => 'Estàs segur que vols eliminar la moneda anomenada ":name"?',
    'piggyBank_areYouSure'        => 'Estàs segur que vols eliminar la guardiola anomenada ":name"?',
    'journal_areYouSure'          => 'Estàs segur que vols eliminar la transacció amb descripció ":description"?',
    'mass_journal_are_you_sure'   => 'Estàs segur que vols eliminar aquestes transaccions?',

/*
 * PLEASE DO NOT EDIT THIS FILE DIRECTLY.
 * YOUR CHANGES WILL BE OVERWRITTEN!
 * YOUR PR WITH CHANGES TO THIS FILE WILL BE REJECTED!
 *
 * GO TO CROWDIN TO FIX OR CHANGE TRANSLATIONS!
 *
 * https://crowdin.com/project/firefly-iii
 * 
 */


    'tag_areYouSure'              => 'Estàs segur que vols eliminar l\'etiqueta ":tag"?',
    'journal_link_areYouSure'     => 'Estàs segur que vols eliminar l\'enllaç entre <a href=":source_link">:source</a> i <a href=":destination_link">:destination</a>?',
    'linkType_areYouSure'         => 'Estàs segur que vols eliminar el tipus d\'enllaç ":name" (":inward" / ":outward")?',
    'permDeleteWarning'           => 'Eliminar coses de Firefly III és permanent i no es pot desfer.',
    'mass_make_selection'         => 'Tanmateix, pots prevenir que s\'eliminin elements traient la casella de selecció.',
    'delete_all_permanently'      => 'Eliminar selecció permanentment',
    'update_all_journals'         => 'Actualitzar aquestes transaccions',
    'also_delete_transactions'    => 'L\'única transacció connectada a aquest compte també s\'eliminarà.|Totes les :count transaccions connectades a aquest compte també s\'eliminaran.',
    'also_delete_transactions_js' => 'Cap transacció|L\'única transacció connectada a aquest compte també s\'eliminarà.|Totes les {count} transaccions connectades a aquest compte també s\'eliminaran.',
    'also_delete_connections'     => 'L\'única transacció enllaçada amb aquest tipus d\'enllaç perdrà aquesta connexió.|Totes les :count transaccions enllaçades amb aquest tipus d\'enllaç perdran aquesta connexió.',
    'also_delete_rules'           => 'L\'única regla connectada a aquest grup de regles també s\'eliminarà.|Totes les :count regles connectades a aquest grup de regles també s\'eliminaran.',
    'also_delete_piggyBanks'      => 'L\'única guardiola connectada a aquest compte també s\'eliminarà.|Totes les :count guardioles connectades a aquest compte també s\'eliminaran.',
    'also_delete_piggyBanks_js'   => 'Cap guardiola|L\'única guardiola connectada a aquest compte també s\'eliminarà.|Totes les {count} guardioles connectades a aquest compte també s\'eliminaran.',
    'not_delete_piggy_banks'      => 'La guardiola connectada a aquest grup no s\'eliminarà.|Les :count guardioles connectades a aquest grup no s\'eliminaran.',
    'bill_keep_transactions'      => 'L\'única transacció connectada a aquesta factura no s\'eliminarà.|Totes les :count transaccions connectades a aquesta factura s\'eliminaran.',
    'budget_keep_transactions'    => 'L\'única transacció connectada a aquest pressupost no s\'eliminarà.|Totes les :count transaccions connectades a aquest pressupost s\'eliminaran.',
    'category_keep_transactions'  => 'L\'única transacció connectada a aquesta categoria no s\'eliminarà.|Totes les :count transaccions connectades a aquesta categoria s\'eliminaran.',
    'recurring_keep_transactions' => 'L\'única transacció creada per aquesta transacció periòdica no s\'eliminarà.|Totes les :count transaccions creades per aquesta transacció periòdica s\'eliminaran.',
    'tag_keep_transactions'       => 'L\'única transacció connectada a aquesta etiqueta no s\'eliminarà.|Totes les :count transaccions connectades a aquesta etiqueta s\'eliminaran.',
    'check_for_updates'           => 'Buscar actualitzacions',
    'liability_direction'         => 'Passiu entrant/sortint',
    'delete_object_group'         => 'Eliminar grup ":title"',
    'email'                       => 'Adreça de correu electrònic',
    'password'                    => 'Contrasenya',
    'password_confirmation'       => 'Contrasenya (altre cop)',
    'blocked'                     => 'Està bloquejat?',
    'blocked_code'                => 'Motiu del bloqueig',
    'login_name'                  => 'Iniciar sessió',
    'is_owner'                    => 'És administrador?',
    'url'                         => 'URL',
    'bill_end_date'               => 'Data de fi',

    // import
    'apply_rules'                 => 'Aplicar regles',
    'artist'                      => 'Artista',
    'album'                       => 'Àlbum',
    'song'                        => 'Cançó',


    // admin
    'domain'                      => 'Domini',
    'single_user_mode'            => 'Deshabilitar registre d\'usuaris',
    'is_demo_site'                => 'Està en mode de demostració',

    // import
    'configuration_file'          => 'Fitxer de configuració',
    'csv_comma'                   => 'Una coma (,)',
    'csv_semicolon'               => 'Un punt i coma (;)',
    'csv_tab'                     => 'Un tabulador (invisible)',
    'csv_delimiter'               => 'Delimitador del camp CSV',
    'client_id'                   => 'ID del Client',
    'app_id'                      => 'ID de l\'App',
    'secret'                      => 'Secret',
    'public_key'                  => 'Clau pública',
    'country_code'                => 'Codi del país',
    'provider_code'               => 'Banc o proveïdor de dades',
    'fints_url'                   => 'URL de l\'API de FinTS',
    'fints_port'                  => 'Port',
    'fints_bank_code'             => 'Codi bancari',
    'fints_username'              => 'Nom d\'usuari',
    'fints_password'              => 'PIN / Contrasenya',
    'fints_account'               => 'Compte FinTS',
    'local_account'               => 'Compte Firefly III',

/*
 * PLEASE DO NOT EDIT THIS FILE DIRECTLY.
 * YOUR CHANGES WILL BE OVERWRITTEN!
 * YOUR PR WITH CHANGES TO THIS FILE WILL BE REJECTED!
 *
 * GO TO CROWDIN TO FIX OR CHANGE TRANSLATIONS!
 *
 * https://crowdin.com/project/firefly-iii
 * 
 */


    'from_date'                   => 'Data des de',
    'to_date'                     => 'Data fins a',
    'due_date'                    => 'Data de venciment',
    'payment_date'                => 'Data de pagament',
    'invoice_date'                => 'Data de facturació',
    'internal_reference'          => 'Referència interna',
    'inward'                      => 'Descripció interna',
    'outward'                     => 'Descripció externa',
    'rule_group_id'               => 'Grup de regles',
    'transaction_description'     => 'Descripció de la transacció',
    'first_date'                  => 'Primera data',
    'transaction_type'            => 'Tipus de transacció',
    'repeat_until'                => 'Repetir fins a',
    'recurring_description'       => 'Descripció de la transacció periòdica',
    'repetition_type'             => 'Tipus de repetició',
    'foreign_currency_id'         => 'Moneda estrangera',
    'repetition_end'              => 'La repetició acaba',
    'repetitions'                 => 'Repeticions',
    'calendar'                    => 'Calendari',
    'weekend'                     => 'Cap de setmana',
    'client_secret'               => 'Secret del client',
    'withdrawal_destination_id'   => 'Compte de destí',
    'deposit_source_id'           => 'Compte d\'origen',
    'expected_on'                 => 'S\'esperava el',
    'paid'                        => 'Pagat',
    'auto_budget_type'            => 'Pressupost automàtic',
    'auto_budget_amount'          => 'Import del pressupost automàtic',
    'auto_budget_period'          => 'Període del pressupost automàtic',
    'collected'                   => 'Cobrat',
    'submitted'                   => 'Enviat',
    'key'                         => 'Clau',
    'value'                       => 'Contingut del registre',
    'webhook_delivery'            => 'Lliurament',
    'webhook_response'            => 'Resposta',
    'webhook_trigger'             => 'Activador',
];
/*
 * PLEASE DO NOT EDIT THIS FILE DIRECTLY.
 * YOUR CHANGES WILL BE OVERWRITTEN!
 * YOUR PR WITH CHANGES TO THIS FILE WILL BE REJECTED!
 *
 * GO TO CROWDIN TO FIX OR CHANGE TRANSLATIONS!
 *
 * https://crowdin.com/project/firefly-iii
 * 
 */

