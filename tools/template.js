import serialize from 'serialize-javascript';

export default ({ markup, helmet, initialData }) => {
	return `
		<!doctype html>
			<html ${helmet.htmlAttributes.toString()}>

			<head>

				${helmet.title.toString()}
				${helmet.meta.toString()}
				${helmet.link.toString()}

				<link href="/static/bundle.css" rel="stylesheet">

				<!--icons-->
				<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
				<link href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet">
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

				<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDkX5LaBfzBgmm8ihvTIOJg-N65oCwqlAk&libraries=places&language=en"></script>				

			</body>

		</html>
	`;
};