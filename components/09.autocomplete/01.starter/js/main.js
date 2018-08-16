// List of countries.
// Scroll past this list to code.
const countries = [
  { name: 'Afghanistan', countryCode: 'AF' },
  { name: 'Aland Islands', countryCode: 'AX' },
  { name: 'Albania', countryCode: 'AL' },
  { name: 'Algeria', countryCode: 'DZ' },
  { name: 'American Samoa', countryCode: 'AS' },
  { name: 'Andorra', countryCode: 'AD' },
  { name: 'Angola', countryCode: 'AO' },
  { name: 'Anguilla', countryCode: 'AI' },
  { name: 'Antarctica', countryCode: 'AQ' },
  { name: 'Antigua and Barbuda', countryCode: 'AG' },
  { name: 'Argentina', countryCode: 'AR' },
  { name: 'Armenia', countryCode: 'AM' },
  { name: 'Aruba', countryCode: 'AW' },
  { name: 'Australia', countryCode: 'AU' },
  { name: 'Austria', countryCode: 'AT' },
  { name: 'Azerbaijan', countryCode: 'AZ' },
  { name: 'Bahamas', countryCode: 'BS' },
  { name: 'Bahrain', countryCode: 'BH' },
  { name: 'Bangladesh', countryCode: 'BD' },
  { name: 'Barbados', countryCode: 'BB' },
  { name: 'Belarus', countryCode: 'BY' },
  { name: 'Belgium', countryCode: 'BE' },
  { name: 'Belize', countryCode: 'BZ' },
  { name: 'Benin', countryCode: 'BJ' },
  { name: 'Bermuda', countryCode: 'BM' },
  { name: 'Bhutan', countryCode: 'BT' },
  { name: 'Bolivia', countryCode: 'BO' },
  { name: 'Bonaire, Sint Eustatius and Saba', countryCode: 'BQ' },
  { name: 'Bosnia and Herzegovina', countryCode: 'BA' },
  { name: 'Botswana', countryCode: 'BW' },
  { name: 'Bouvet Island', countryCode: 'BV' },
  { name: 'Brazil', countryCode: 'BR' },
  { name: 'British Indian Ocean Territory', countryCode: 'IO' },
  { name: 'United States Minor Outlying Islands', countryCode: 'UM' },
  { name: 'Virgin Islands (British)', countryCode: 'VG' },
  { name: 'Virgin Islands (U.S.)', countryCode: 'VI' },
  { name: 'Brunei Darussalam', countryCode: 'BN' },
  { name: 'Bulgaria', countryCode: 'BG' },
  { name: 'Burkina Faso', countryCode: 'BF' },
  { name: 'Burundi', countryCode: 'BI' },
  { name: 'Cambodia', countryCode: 'KH' },
  { name: 'Cameroon', countryCode: 'CM' },
  { name: 'Canada', countryCode: 'CA' },
  { name: 'Cabo Verde', countryCode: 'CV' },
  { name: 'Cayman Islands', countryCode: 'KY' },
  { name: 'Central African Republic', countryCode: 'CF' },
  { name: 'Chad', countryCode: 'TD' },
  { name: 'Chile', countryCode: 'CL' },
  { name: 'China', countryCode: 'CN' },
  { name: 'Christmas Island', countryCode: 'CX' },
  { name: 'Cocos (Keeling) Islands', countryCode: 'CC' },
  { name: 'Colombia', countryCode: 'CO' },
  { name: 'Comoros', countryCode: 'KM' },
  { name: 'Congo', countryCode: 'CG' },
  { name: 'Congo (Democratic Republic of the)', countryCode: 'CD' },
  { name: 'Cook Islands', countryCode: 'CK' },
  { name: 'Costa Rica', countryCode: 'CR' },
  { name: 'Croatia', countryCode: 'HR' },
  { name: 'Cuba', countryCode: 'CU' },
  { name: 'Curaçao', countryCode: 'CW' },
  { name: 'Cyprus', countryCode: 'CY' },
  { name: 'Czech Republic', countryCode: 'CZ' },
  { name: 'Denmark', countryCode: 'DK' },
  { name: 'Djibouti', countryCode: 'DJ' },
  { name: 'Dominica', countryCode: 'DM' },
  { name: 'Dominican Republic', countryCode: 'DO' },
  { name: 'Ecuador', countryCode: 'EC' },
  { name: 'Egypt', countryCode: 'EG' },
  { name: 'El Salvador', countryCode: 'SV' },
  { name: 'Equatorial Guinea', countryCode: 'GQ' },
  { name: 'Eritrea', countryCode: 'ER' },
  { name: 'Estonia', countryCode: 'EE' },
  { name: 'Ethiopia', countryCode: 'ET' },
  { name: 'Falkland Islands (Malvinas)', countryCode: 'FK' },
  { name: 'Faroe Islands', countryCode: 'FO' },
  { name: 'Fiji', countryCode: 'FJ' },
  { name: 'Finland', countryCode: 'FI' },
  { name: 'France', countryCode: 'FR' },
  { name: 'French Guiana', countryCode: 'GF' },
  { name: 'French Polynesia', countryCode: 'PF' },
  { name: 'French Southern Territories', countryCode: 'TF' },
  { name: 'Gabon', countryCode: 'GA' },
  { name: 'Gambia', countryCode: 'GM' },
  { name: 'Georgia', countryCode: 'GE' },
  { name: 'Germany', countryCode: 'DE' },
  { name: 'Ghana', countryCode: 'GH' },
  { name: 'Gibraltar', countryCode: 'GI' },
  { name: 'Greece', countryCode: 'GR' },
  { name: 'Greenland', countryCode: 'GL' },
  { name: 'Grenada', countryCode: 'GD' },
  { name: 'Guadeloupe', countryCode: 'GP' },
  { name: 'Guam', countryCode: 'GU' },
  { name: 'Guatemala', countryCode: 'GT' },
  { name: 'Guernsey', countryCode: 'GG' },
  { name: 'Guinea', countryCode: 'GN' },
  { name: 'Guinea-Bissau', countryCode: 'GW' },
  { name: 'Guyana', countryCode: 'GY' },
  { name: 'Haiti', countryCode: 'HT' },
  { name: 'Heard Island and McDonald Islands', countryCode: 'HM' },
  { name: 'Holy See', countryCode: 'VA' },
  { name: 'Honduras', countryCode: 'HN' },
  { name: 'Hong Kong', countryCode: 'HK' },
  { name: 'Hungary', countryCode: 'HU' },
  { name: 'Iceland', countryCode: 'IS' },
  { name: 'India', countryCode: 'IN' },
  { name: 'Indonesia', countryCode: 'ID' },
  { name: "Côte d'Ivoire", countryCode: 'CI' },
  { name: 'Iran (Islamic Republic of)', countryCode: 'IR' },
  { name: 'Iraq', countryCode: 'IQ' },
  { name: 'Ireland', countryCode: 'IE' },
  { name: 'Isle of Man', countryCode: 'IM' },
  { name: 'Israel', countryCode: 'IL' },
  { name: 'Italy', countryCode: 'IT' },
  { name: 'Jamaica', countryCode: 'JM' },
  { name: 'Japan', countryCode: 'JP' },
  { name: 'Jersey', countryCode: 'JE' },
  { name: 'Jordan', countryCode: 'JO' },
  { name: 'Kazakhstan', countryCode: 'KZ' },
  { name: 'Kenya', countryCode: 'KE' },
  { name: 'Kiribati', countryCode: 'KI' },
  { name: 'Kuwait', countryCode: 'KW' },
  { name: 'Kyrgyzstan', countryCode: 'KG' },
  { name: "Lao People's Democratic Republic", countryCode: 'LA' },
  { name: 'Latvia', countryCode: 'LV' },
  { name: 'Lebanon', countryCode: 'LB' },
  { name: 'Lesotho', countryCode: 'LS' },
  { name: 'Liberia', countryCode: 'LR' },
  { name: 'Libya', countryCode: 'LY' },
  { name: 'Liechtenstein', countryCode: 'LI' },
  { name: 'Lithuania', countryCode: 'LT' },
  { name: 'Luxembourg', countryCode: 'LU' },
  { name: 'Macao', countryCode: 'MO' },
  { name: 'Macedonia (the former Yugoslav Republic of)', countryCode: 'MK' },
  { name: 'Madagascar', countryCode: 'MG' },
  { name: 'Malawi', countryCode: 'MW' },
  { name: 'Malaysia', countryCode: 'MY' },
  { name: 'Maldives', countryCode: 'MV' },
  { name: 'Mali', countryCode: 'ML' },
  { name: 'Malta', countryCode: 'MT' },
  { name: 'Marshall Islands', countryCode: 'MH' },
  { name: 'Martinique', countryCode: 'MQ' },
  { name: 'Mauritania', countryCode: 'MR' },
  { name: 'Mauritius', countryCode: 'MU' },
  { name: 'Mayotte', countryCode: 'YT' },
  { name: 'Mexico', countryCode: 'MX' },
  { name: 'Micronesia (Federated States of)', countryCode: 'FM' },
  { name: 'Moldova (Republic of)', countryCode: 'MD' },
  { name: 'Monaco', countryCode: 'MC' },
  { name: 'Mongolia', countryCode: 'MN' },
  { name: 'Montenegro', countryCode: 'ME' },
  { name: 'Montserrat', countryCode: 'MS' },
  { name: 'Morocco', countryCode: 'MA' },
  { name: 'Mozambique', countryCode: 'MZ' },
  { name: 'Myanmar', countryCode: 'MM' },
  { name: 'Namibia', countryCode: 'NA' },
  { name: 'Nauru', countryCode: 'NR' },
  { name: 'Nepal', countryCode: 'NP' },
  { name: 'Netherlands', countryCode: 'NL' },
  { name: 'New Caledonia', countryCode: 'NC' },
  { name: 'New Zealand', countryCode: 'NZ' },
  { name: 'Nicaragua', countryCode: 'NI' },
  { name: 'Niger', countryCode: 'NE' },
  { name: 'Nigeria', countryCode: 'NG' },
  { name: 'Niue', countryCode: 'NU' },
  { name: 'Norfolk Island', countryCode: 'NF' },
  { name: 'North Korea', countryCode: 'KP' },
  { name: 'Northern Mariana Islands', countryCode: 'MP' },
  { name: 'Norway', countryCode: 'NO' },
  { name: 'Oman', countryCode: 'OM' },
  { name: 'Pakistan', countryCode: 'PK' },
  { name: 'Palau', countryCode: 'PW' },
  { name: 'Palestine, State of', countryCode: 'PS' },
  { name: 'Panama', countryCode: 'PA' },
  { name: 'Papua New Guinea', countryCode: 'PG' },
  { name: 'Paraguay', countryCode: 'PY' },
  { name: 'Peru', countryCode: 'PE' },
  { name: 'Philippines', countryCode: 'PH' },
  { name: 'Pitcairn', countryCode: 'PN' },
  { name: 'Poland', countryCode: 'PL' },
  { name: 'Portugal', countryCode: 'PT' },
  { name: 'Puerto Rico', countryCode: 'PR' },
  { name: 'Qatar', countryCode: 'QA' },
  { name: 'Republic of Kosovo', countryCode: 'XK' },
  { name: 'Réunion', countryCode: 'RE' },
  { name: 'Romania', countryCode: 'RO' },
  { name: 'Russian Federation', countryCode: 'RU' },
  { name: 'Rwanda', countryCode: 'RW' },
  { name: 'Saint Barthélemy', countryCode: 'BL' },
  { name: 'Saint Helena, Ascension and Tristan da Cunha', countryCode: 'SH' },
  { name: 'Saint Kitts and Nevis', countryCode: 'KN' },
  { name: 'Saint Lucia', countryCode: 'LC' },
  { name: 'Saint Martin (French part)', countryCode: 'MF' },
  { name: 'Saint Pierre and Miquelon', countryCode: 'PM' },
  { name: 'Saint Vincent and the Grenadines', countryCode: 'VC' },
  { name: 'Samoa', countryCode: 'WS' },
  { name: 'San Marino', countryCode: 'SM' },
  { name: 'Sao Tome and Principe', countryCode: 'ST' },
  { name: 'Saudi Arabia', countryCode: 'SA' },
  { name: 'Senegal', countryCode: 'SN' },
  { name: 'Serbia', countryCode: 'RS' },
  { name: 'Seychelles', countryCode: 'SC' },
  { name: 'Sierra Leone', countryCode: 'SL' },
  { name: 'Singapore', countryCode: 'SG' },
  { name: 'Sint Maarten', countryCode: 'SX' },
  { name: 'Slovakia', countryCode: 'SK' },
  { name: 'Slovenia', countryCode: 'SI' },
  { name: 'Solomon Islands', countryCode: 'SB' },
  { name: 'Somalia', countryCode: 'SO' },
  { name: 'South Africa', countryCode: 'ZA' },
  { name: 'South Georgia and the South Sandwich Islands', countryCode: 'GS' },
  { name: 'South Korea', countryCode: 'KR' },
  { name: 'South Sudan', countryCode: 'SS' },
  { name: 'Spain', countryCode: 'ES' },
  { name: 'Sri Lanka', countryCode: 'LK' },
  { name: 'Sudan', countryCode: 'SD' },
  { name: 'Suriname', countryCode: 'SR' },
  { name: 'Svalbard and Jan Mayen', countryCode: 'SJ' },
  { name: 'Swaziland', countryCode: 'SZ' },
  { name: 'Sweden', countryCode: 'SE' },
  { name: 'Switzerland', countryCode: 'CH' },
  { name: 'Syrian Arab Republic', countryCode: 'SY' },
  { name: 'Taiwan', countryCode: 'TW' },
  { name: 'Tajikistan', countryCode: 'TJ' },
  { name: 'Tanzania, United Republic of', countryCode: 'TZ' },
  { name: 'Thailand', countryCode: 'TH' },
  { name: 'Timor-Leste', countryCode: 'TL' },
  { name: 'Togo', countryCode: 'TG' },
  { name: 'Tokelau', countryCode: 'TK' },
  { name: 'Tonga', countryCode: 'TO' },
  { name: 'Trinidad and Tobago', countryCode: 'TT' },
  { name: 'Tunisia', countryCode: 'TN' },
  { name: 'Turkey', countryCode: 'TR' },
  { name: 'Turkmenistan', countryCode: 'TM' },
  { name: 'Turks and Caicos Islands', countryCode: 'TC' },
  { name: 'Tuvalu', countryCode: 'TV' },
  { name: 'Uganda', countryCode: 'UG' },
  { name: 'Ukraine', countryCode: 'UA' },
  { name: 'United Arab Emirates', countryCode: 'AE' },
  { name: 'United Kingdom', countryCode: 'GB' },
  { name: 'United States', countryCode: 'US' },
  { name: 'Uruguay', countryCode: 'UY' },
  { name: 'Uzbekistan', countryCode: 'UZ' },
  { name: 'Vanuatu', countryCode: 'VU' },
  { name: 'Venezuela', countryCode: 'VE' },
  { name: 'Vietnam', countryCode: 'VN' },
  { name: 'Wallis and Futuna', countryCode: 'WF' },
  { name: 'Western Sahara', countryCode: 'EH' },
  { name: 'Yemen', countryCode: 'YE' },
  { name: 'Zambia', countryCode: 'ZM' },
  { name: 'Zimbabwe', countryCode: 'ZW' }
]

// # START EDITING YOUR JAVASCRIPT HERE
// ===============