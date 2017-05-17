// news simulation
const news = [
  {
    id: 1,
    title: 'Everyday carry',
    content: 'Intelligentsia VHS deep v, etsy glossier meggings coloring book art party crucifix. Tilde selfies fingerstache listicle cornhole fixie church-key, tbh organic dreamcatcher kitsch chambray synth direct trade. Live-edge fashion axe sustainable, hexagon c',
		date: 'Jan 08 2017 09:00AM'
  },
	{
		id: 2,
		title: 'Portland succulents',
		content: 'Etsy iPhone hell of dreamcatcher pitchfork seitan. Pinterest chicharrones tumeric, lomo narwhal microdosing venmo single-origin coffee next level edison bulb roof party 8-bit keytar VHS DIY. Cold-pressed yuccie lumbersexual hot chicken master cleanse synth',
		date: 'Jan 08 2017 09:00AM'
	},
	{
		id: 3,
		title: 'Helvetica swag,',
		content: 'Godard marfa helvetica swag, bicycle rights cred quinoa leggings. Lo-fi green juice literally, next level mlkshk kogi godard pop-up try-hard farm-to-table asymmetrical. Bitters mustache heirloom polaroid',
		date: 'Jan 08 2017 09:00AM'
	}
]

// user simulation
const user =
{
    id: 12117,
    username: '@tomhardy',
    password: 'dsfd32rf',
    authphone: '0971894185',
    role: 'Fronend',
    firstname: 'Tom',
    lastname: 'Hardy',
    hometel: '0971894185',
    mobtel: '0971894185',
    address: 'Dankevycha 23',
    zip: '41018',
    city: 'Ipsum',
    country: 'Redania',
    dateOfBirth: '18-05-1991',
    startofemployment: 'employed'
}


exports.loginPage = function(req, res){
		res.render('loginPage.ejs', {
			pageTitle: 'Login page'
		});
	};

exports.homePage = function(req, res){
		res.render('homePage.ejs',
		{
			user: user,
			news: news
		});
	};
