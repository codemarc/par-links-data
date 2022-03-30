// http://localhost:1234/src/static/popup.html

const config = [
  {
    "section": "section1",
    'href': '#',
    links: [{name: '', href: '' },{name: '', href: '' },{name: '', href: '' },{name: '', href: '' },
    {
      label: "-",
      name: "unicode-table",
      href: "https://unicode-table.com/en/"
    }]
  },
  {
    section: 'Communications', href: '#',
    links: [
      {name: 'Zoom', href: '' },
      {name: 'Slack', href: 'https://partech.slack.com/messages/general/' },
      {name: '', href: '' },{name: '', href: '' },{name: '', href: '' },{name: '', href: '' }]
  },
  {
    section: 'section3', href: '#',
    links: [{name: '', href: '' },{name: '', href: '' },{name: '', href: '' },{name: '', href: '' },{name: '', href: '' },{name: '', href: '' }]
  },
  {
    section: 'section4', href: '#',
    links: [{name: '', href: '' },{name: '', href: '' },{name: '', href: '' },{name: '', href: '' },{name: '', href: '' },{name: '', href: '' }]
  },
  {
    section: 'section5', href: '#',
    links: [{name: '', href: '' },{name: '', href: '' },{name: '', href: '' },{name: '', href: '' },{name: '', href: '' },{name: '', href: '' }]
  },
  {
    section: 'section6', href: '#',
    links: [{name: '', href: '' },{name: '', href: '' },{name: '', href: '' },{name: '', href: '' },{name: '', href: '' },{name: '', href: '' }]
  },
  {
    section: 'section7', href: '#',
    links: [{name: '', href: '' },{name: '', href: '' },{name: '', href: '' },{name: '', href: '' },{name: '', href: '' },{name: '', href: '' }]
  },
  {
    section: 'section8', href: '#',
    links: [{name: '', href: '' },{name: '', href: '' },{name: '', href: '' },{name: '', href: '' },{name: '', href: '' },{name: '', href: '' }]
  }
]


var request = require ('request')

request ({
	url: 'https://raw.githubusercontent.com/rateljs/plugin/master/package.json',
	json: true
}, (error, response, body) => {
	!error && response.statusCode === 200
		? log (body)
		: log (error)
})


export default config