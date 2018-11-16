<template>
    <div>
     <footer style="background-color:#343a40;color:white">
			<div class="primary-footer">
				<div class="container">
					<div class="row">
						<!-- start single footer widget -->
						<div class="col-sm-6 col-md-4">
							<div class="footer-widget about-us text-white">
								<a href="#"><h3 class="text-white">A1 Bread</h3></a>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor</p>
								<div class="online-card">
									<a href="#"><img src="assets/img/online-card/1.png" alt="" /></a>
									<a href="#"><img src="assets/img/online-card/2.png" alt="" /></a>
									<a href="#"><img src="assets/img/online-card/3.png" alt="" /></a>
									<a href="#"><img src="assets/img/online-card/4.png" alt="" /></a>
								</div>
							</div>
						</div><!-- end single footer widget -->
						
						<!-- start single footer widget -->
						<div class="col-sm-6 col-md-2">
							<div class="footer-widget usefull-link">
								<h3 class="text-white">Useful Links</h3>
								<ul> 
									<li><router-link class="text-white" to=""><i class="fa fa-angle-right"></i>About Us</router-link></li>
									<li><router-link class="text-white" to=""><i class="fa fa-angle-right"></i>Services</router-link></li>
									<li><router-link class="text-white" to=""><i class="fa fa-angle-right"></i>Contact</router-link></li>
									<li><router-link class="text-white" to=""><i class="fa fa-angle-right"></i>Privacy Policy</router-link></li>
								</ul>
							</div>
						</div><!-- end single footer widget -->
						
						<!-- start single footer widget -->
						<div class="col-sm-6 col-md-3">
							
						</div><!-- end single footer widget -->
						
						<!-- start single footer widget -->
						<div class="col-sm-6 col-md-3">
							<div class="footer-widget news-letter">
								<h3 class="text-white">NewsLetter Subscription</h3>
								<p>Subscribe to get the latest news, update and offer information. Don't worry, we won't send spam!</p>

								<form class="subscribe-form mailchimp" method="post">
                                    <div class="clearfix">
                                        <div class="input-wrapper">
                                          <label class="sr-only" for="email">Email</label>
                                          <input id="subscribeEmail" type="email" name="subscribeEmail" class="validate form-control" placeholder="Your Email Please!">
                                          <button type="submit" class="btn btn-primary">
						                        <i class="site-menu-icon wb-arrow-right" aria-hidden="true"></i>
										  </button>
                                        </div>
                                    </div>
                                    <!-- to showing success messages -->
                                    <p class="subscription-success"></p>
								</form>
							</div><!-- /.news-letter -->
						</div><!-- end single footer widget -->
					</div><!-- /.row -->
				</div><!-- /.container -->
			</div><!-- /.primary-footer -->
      	<!-- footer copyright area -->
			<div class="copyright-wrapper text-center">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<p>© Copyright 2013 by <span>Supreme State</span>. All Rights Reserved.</p>
						</div>
					</div><!-- /.row -->
				</div><!-- /.container -->
			</div><!-- ./end copyright-wrapper -->
	</footer></div>
</template>
<script>
export default{
    
}
</script>