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

				<link rel="stylesheet" href="/static/bundle.css">

				<!--icons-->
				<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
				<link href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet">
				<!--end-->

				<!--fonts-->
				<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet">
				<link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900" rel="stylesheet">
				<!--end-->

				<!-- Hotjar Tracking Code for https://parkingaccess.com -->
				<script>
				   (function(h,o,t,j,a,r){
					   h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
					   h._hjSettings={hjid:1229834,hjsv:6};
					   a=o.getElementsByTagName('head')[0];
					   r=o.createElement('script');r.async=1;
					   r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
					   a.appendChild(r);
				   })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
				</script>
			</head>

			<body ${helmet.bodyAttributes.toString()}>

				<div id="root">${markup}</div>

				<script src="/static/client.js" async></script>
				
				<script>window.__initialData__ = ${serialize(initialData)}</script>

				<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCYbKHvKbo-OVngwn9sj2s8mFuqLxUwA-A&libraries==places&language=en"></script>
				<!--Slaask integration-->
				<script>
				 !function(){var x=document.createElement("script");x.src="https://cdn.slaask.com/chat.js",x.type="text/javascript",x.async="true",x.onload=x.onreadystatechange=function(){var x=this.readyState;if(!x||"complete"==x||"loaded"==x)try{
				   _slaask.init('spk-b3b0d3ca-23c8-479b-a695-ae66de32690c');
				 }catch(x){}};var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(x,t)}();
				</script>
			</body>

		</html>
	`;
};
