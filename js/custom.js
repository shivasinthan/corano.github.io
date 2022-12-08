// $(window).scroll(function () {
// 	if ($(this).scrollTop() > 50) {
// 		$('.main-header').addClass('newClass');
// 	} else {
// 		$('.main-header').removeClass('newClass');
// 	}
// });

$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});

$(document).ready(function () {



	$('.banner-slide').owlCarousel({



		loop: true,

		margin: 0,

		autoplay: false,

		autoplayTimeout: 7500,

		smartSpeed: 1200,

		autoplayHoverPause: false,

		responsiveClass: true,





		// navText: ["<i class='las la-angle-left'></i>", "<i class='las la-angle-right'></i>"],



		responsive: {



			0: {



				items: 1,



				nav: true,



				loop: true,



				autoplay: true,



			},



			600: {



				items: 1,



				nav: true,



				loop: true,



				autoplay: true,



			},



			1000: {



				items: 1,



				nav: true,



				loop: true,



				autoplay: true,



			}



		}



	})

	$('.slide-card-outer').owlCarousel({



		loop: true,
	
		margin: 0,
	
		autoplay: false,
	
		autoplayTimeout: 7500,
	
		smartSpeed: 1200,
	
		autoplayHoverPause: false,
	
		responsiveClass: true,
	
		
	
		
	
		navText: ["<i class='las la-angle-left'></i>", "<i class='las la-angle-right'></i>"],
	
	
	
		responsive: {
	
	
	
			0: {
	
	
	
				items: 1,
	
	
	
				nav:true,
	
	
	
				loop: true,
	
	
	
				autoplay:true,
	
	
	
			},
	
	
	
			600: {
	
	
	
				items: 1,
	
	
	
				nav: true,
	
	
	
				loop: true,
	
	
	
				autoplay:true,
	
	
	
			},
	
	
	
	
			1000: {
	
	
	
				items: 4,
	
	
	
				nav: true,
	
	
	
				loop: true,
	
	
	
				autoplay:true,
	
	
	
			}
	
	
	
		}
	
	
	
	})

	$('.trending-outer').owlCarousel({



		loop: true,
	
		margin: 0,
	
		autoplay: false,
	
		autoplayTimeout: 7500,
	
		smartSpeed: 1200,
	
		autoplayHoverPause: false,
	
		responsiveClass: true,
	
		
	
		
	
		navText: ["<i class='las la-angle-left'></i>", "<i class='las la-angle-right'></i>"],
	
	
	
		responsive: {
	
	
	
			0: {
	
	
	
				items: 1,
	
	
	
				nav:true,
	
	
	
				loop: true,
	
	
	
				autoplay:true,
	
	
	
			},
	
	
	
			600: {
	
	
	
				items: 1,
	
	
	
				nav: true,
	
	
	
				loop: true,
	
	
	
				autoplay:true,
	
	
	
			},
	
	
	
	
			1000: {
	
	
	
				items: 4,
	
	
	
				nav: true,
	
	
	
				loop: true,
	
	
	
				autoplay:true,
	
	
	
			}
	
	
	
		}
	
	
	
	})

	$('.brand-oter').owlCarousel({



		loop: true,
	
		margin: 0,
	
		autoplay: false,
	
		autoplayTimeout: 7500,
	
		smartSpeed: 1200,
	
		autoplayHoverPause: false,
	
		responsiveClass: true,
	
		
	
		
	
		navText: ["<i class='las la-angle-left'></i>", "<i class='las la-angle-right'></i>"],
	
	
	
		responsive: {
	
	
	
			0: {
	
	
	
				items: 1,
	
	
	
				nav:true,
	
	
	
				loop: true,
	
	
	
				autoplay:true,
	
	
	
			},

			
			820: {
	
	
	
				items: 5,
	
	
	
				nav: true,
	
	
	
				loop: true,
	
	
	
				autoplay:true,
	
	
	
			},
	
	
			768: {
	
	
	
				items: 5,
	
	
	
				nav: true,
	
	
	
				loop: true,
	
	
	
				autoplay:true,
	
	
	
			},
	
	
	
	
			600: {
	
	
	
				items: 1,
	
	
	
				nav: true,
	
	
	
				loop: true,
	
	
	
				autoplay:true,
	
	
	
			},
	
	
	
	
			1000: {
	
	
	
				items: 5,
	
	
	
				nav: true,
	
	
	
				loop: true,
	
	
	
				autoplay:true,
	
	
	
			}
	
	
	
		}
	
	
	
	})
	
	$('.blog-outer').owlCarousel({
	
	
	
		loop: true,
	
		margin: 0,
	
		autoplay: false,
	
		autoplayTimeout: 7500,
	
		smartSpeed: 1200,
	
		autoplayHoverPause: false,
	
		responsiveClass: true,
	
		
	
		
	
		navText: ["<i class='las la-angle-left'></i>", "<i class='las la-angle-right'></i>"],
	
	
	
		responsive: {
	
	
	
			0: {
	
	
	
				items: 1,
	
	
	
				nav:true,
	
	
	
				loop: true,
	
	
	
				autoplay:true,
	
	
	
			},
	
	
	
			600: {
	
	
	
				items: 1,
	
	
	
				nav: true,
	
	
	
				loop: true,
	
	
	
				autoplay:true,
	
	
	
			},
	
	
	
	
			1000: {
	
	
	
				items: 3,
	
	
	
				nav: true,
	
	
	
				loop: true,
	
	
	
				autoplay:true,
	
	
	
			}
	
	
	
		}
	
	
	
	})

})










