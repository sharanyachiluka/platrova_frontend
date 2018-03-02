import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
        	<footer class="footer-distributed">

			<div class="footer-left">

				<h3><span>Platrova</span></h3>

				<p class="footer-links">
					<a href="#">Home</a>
					·
					<a href="#">Blog</a>
					·
					<a href="#">Pricing</a>
					·
					<a href="#">About</a>
					·
					<a href="#">Faq</a>
					·
					<a href="#">Contact</a>
				</p>

				<p class="footer-company-name">Platrova &copy; 2018</p>
			</div>
<div className="footer-center">
</div>
			<div class="footer-right">

				<br/><br/><font color="white">Mail to:</font>
				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">platrovaservice@gmail.com</a></p>
				</div>

			</div>

			

		</footer>
		

        );
    }
}

export default Footer;