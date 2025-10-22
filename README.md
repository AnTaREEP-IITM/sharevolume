# ShareVolume

A small, professional, accessible, mobile-responsive single-page app for displaying the share volume of American Electric Power (AEP).

## How to run
To run the application, simply open `index.html` in a web browser. You can also provide a CIK as a query parameter, like this: `index.html?CIK=0001018724`.

## Features
- Displays the number of shares outstanding for American Electric Power.
- Fetches data from the SEC API and updates dynamically based on CIK query parameters.

## Accessibility
The application uses semantic HTML5 elements and ensures keyboard navigation is supported. ARIA attributes are applied where relevant to enhance screen reader compatibility.

## Design tokens (CSS variables/palette)
- Main color: `#007BFF`
- Background color: `#f9f9f9`

## API endpoints used
- `https://data.sec.gov/api/xbrl/companyconcept/CIK0000004904/dei/EntityCommonStockSharesOutstanding.json`

## Attachments used
- `uid.txt`

## Keyword coverage
| Keyword/Phrase | Implementation |
|----------------|----------------|
| ShareVolume | Application title, functionality |
| entityName | Fetched and displayed on page |
| max | Calculated maximum shares |
| min | Calculated minimum shares |
| shares outstanding | Main purpose of app |
| fetch | Used to get data from SEC API |
| mobile-responsive | Media queries in CSS |
| accessible | Semantic HTML and ARIA usage |

## Changelog: Round 1
- Initial implementation of the ShareVolume app with functionality to fetch, process, and display share volume data from the SEC API.