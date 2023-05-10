import '../style/SignIn.css';
import { NavLink } from 'react-router-dom';

const SignIn = ()=>{
  return (
    <div class="container-2">
        <div class="forms-container">
            <div class="signin-signup">
                <form action="#" class="sign-in-form">
                    <h2 class="title">Sign in</h2>
                    <div class="input-field">
                        <i class="fas fa-user"></i>
                        <input type="text" placeholder="Username" />
                    </div>
                    <div class="input-field">
                        <i class="fas fa-mobile"></i>
                        <input type="password" placeholder="Mobile Number" />
                    </div>
                    <input type="submit" value="Login" class="btn solid" />
                    <a href="ForgetPassword.html"> Forget Password</a>
                    <p class="social-text">Or Sign in with social platforms</p>
                    <div class="social-media">
                        <a href="#" class="social-icon">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="social-icon">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="social-icon">
                            <i class="fab fa-google"></i>
                        </a>
                        <a href="#" class="social-icon">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </form>
                <form action="#" class="sign-up-form">
                    <h2 class="title">Sign up</h2>
                    <div class="input-field">
                        <i class="fas fa-user"></i>
                        <input type="text" placeholder="Username" />
                    </div>
                    <div class="input-field">
                        <i class="fas fa-mobile"></i>
                        <input type="email" placeholder="Mobile Number" />
                    </div>
                    <div class="input-field">
                        <i class="fas fa-lock"></i>
                        <input type="password" placeholder="Password" />
                    </div>
                    <input type="submit" class="btn" value="Sign up" />
                    <p class="social-text">Or Sign up with social platforms</p>
                    <div class="social-media">
                        <a href="#" class="social-icon">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="social-icon">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="social-icon">
                            <i class="fab fa-google"></i>
                        </a>
                        <a href="#" class="social-icon">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </form>
            </div>
        </div>

        <div class="panels-container">
            <div class="panel left-panel">
                <div class="content">
                    <h3>Tap Cash</h3>
                    <p>
                        the easiest way to send, receive, and manage your money! With CashApp, you can securely send money to your friends and family with just a few taps on your phone. No need to worry about carrying cash or dealing with complicated bank transfers. Plus, CashApp
                        offers a range of great features to help you manage your finances
                    </p>
                    <button class="btn transparent" id="sign-up-btn">
              Sign up
            </button>
                </div>
                <img src="img/undraw_online_transactions_-02-ka.svg" class="image" alt="" />
            </div>
            <div class="panel right-panel">
                <div class="content">
                    <h3>Tap Cash</h3>
                    <p>
                        Use your Cash Card to make purchases at stores and online, or withdraw cash from ATMs. Investing: Invest in stocks or bitcoin with just a few taps.
                    </p>
                    <button class="btn transparent" id="sign-in-btn">
              Sign in
            </button>
                </div>
                <img src="img/undraw_stripe_payments_re_chlm.svg" class="image" alt="" />
            </div>
        </div>
    </div>

  );
};

export default SignIn;