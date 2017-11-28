import serialize from 'serialize-javascript';

export default ({ markup, helmet, initialData }) => {
	return `
		<!doctype html>
			<html ${helmet.htmlAttributes.toString()}>

			<head>
			
				<!-- Global site tag (gtag.js) - Google Analytics -->
				<script async src="https://www.googletagmanager.com/gtag/js?id=UA-12474447-1"></script>
				<script>
				  window.dataLayer = window.dataLayer || [];
				  function gtag(){dataLayer.push(arguments);}
				  gtag('js', new Date());
				
				  gtag('config', 'UA-12474447-1');
				</script>

				${helmet.title.toString()}
				${helmet.meta.toString()}
				${helmet.link.toString()}

				${process.env.NODE_ENV === 'production' ? '<link rel="stylesheet" href="/static/bundle.css">': ''}

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

				<div id="root">${markup}</div>

				<script src="/static/client.js" async></script>
				
				<script>window.__initialData__ = ${serialize(initialData)}</script>

				<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCYbKHvKbo-OVngwn9sj2s8mFuqLxUwA-A&libraries==places&language=en"></script>

			</body>

		</html>
	`;
};