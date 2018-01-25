import serialize from 'serialize-javascript';

export default ({ markup, helmet, initialData }) => {
	return `
		<!doctype html>
			<html ${helmet.htmlAttributes.toString()}>

			<head>
				
				<!-- Global site tag (gtag.js) - Google Analytics -->
				<script async src="https://www.googletagmanager.com/gtag/js?id=UA-102648750-1"></script>
				<script>
				  window.dataLayer = window.dataLayer || [];
				  function gtag(){dataLayer.push(arguments);}
				  gtag('js', new Date());
				
				  gtag('config', 'UA-102648750-1');
				</script>

				${helmet.title.toString()}
				${helmet.meta.toString()}
				${helmet.link.toString()}

				<link rel="stylesheet" href="/static/bundle.css">

				<!--icons-->
				<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
				<link href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet">
				<!--end-->

				<!--fonts-->
				<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet">
				<link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900" rel="stylesheet">
				<!--end-->

			</head>

			<body ${helmet.bodyAttributes.toString()}>
			
				${
					process.env.NODE_ENV === 'production' ?
						`
							<!-- Google Code for Conversion Reservation Conversion Page -->
							<script type="text/javascript">
							/* <![CDATA[ */
							var google_conversion_id = 846750830;
							var google_conversion_label = "H1DRCP_uk3UQ7sjhkwM";
							var google_conversion_value = 7.00;
							var google_conversion_currency = "USD";
							var google_remarketing_only = false;
							/* ]]> */
							</script>
							<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
							</script>
							<noscript>
							<div style="display:inline;">
							<img height="1" width="1" style="border-style:none;" alt="" src="//www.googleadservices.com/pagead/conversion/846750830/?value=7.00&amp;currency_code=USD&amp;label=H1DRCP_uk3UQ7sjhkwM&amp;guid=ON&amp;script=0"/>
							</div>
							</noscript>
						`
						: ''
				}

				<div id="root">${markup}</div>

				<script src="/static/client.js" async></script>
				
				<script>window.__initialData__ = ${serialize(initialData)}</script>

				<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCYbKHvKbo-OVngwn9sj2s8mFuqLxUwA-A&libraries==places&language=en"></script>

			</body>

		</html>
	`;
};
