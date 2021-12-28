import PropTypes from 'prop-types'
import React from 'react'
import portrait from '../images/portrait.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
      <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <div class="flex-container">
            <div class="flex-child-left">
              <img src={portrait} alt="Adrianna portrait"/>
            </div>
            <div class="flex-child-right">
              <h3>Hi, I'm Adrianna!</h3>
              <p>
                I'm a senior software developer working out of Ottawa, Ontario (🇨🇦).
                I spent four years interning at Shopify while obtaining my B.C.S. from Carleton
                U here in the nation's capital. I'm passionate about open source
                software, diversity and inclusion in tech, and working with Ruby on Rails.
              </p>
            </div>
          </div>
          <p>
            Outside of work, you'll probably find me curled up with a book or on a hike with my dog, Jasper.
            I love the outdoors, and am a big believer in spending time in nature to disconnect and recharge.
            The background picture on my site was taken on a hike at Moraine Lake in beautiful Banff, Alberta.
          </p>
          <h3 className="major">Experience</h3>
          <p>
            I currently work on the Rails Infrastructure Team at Shopify. Our job is to contribute to the Rails community
            by building and maintaining various Rails open source foundations. We work to define best practices, provide
            expertise, and share our learnings with the community while making "Rails at scale" possible in Shopify's core Rails
            monolith.
          </p>
          <ul>
            <li><strong>June 2021-present:</strong> Senior Production Engineer @ Shopify, Rails Infra Team</li>
            <li><strong>April 2020-June 2021:</strong> Software Developer @ Shopify, Rails Infra Team</li>
          </ul>
          <span>I spent 4 years interning at Shopify as a part of the Dev Degree program, completing five 8-month internships:</span>
          <ul>
            <li><strong>Sept 2019-April 2020:</strong> Developer Intern, Code Foundations Team</li>
            <li><strong>Jan 2019-Sept 2019:</strong> Production Engineering Intern, Production Platform Team</li>
            <li><strong>May 2018-Dec 2018:</strong> Data Science Intern, Partnerships Data Team</li>
            <li><strong>Sept 2017-April 2018:</strong> Developer Intern, Partnerships Team</li>
            <li><strong>Jan 2017-Aug 2018:</strong> Developer Intern, Internal Tools Team</li>
          </ul>
          <h3 className="major">Education</h3>
          <ul>
            <li><strong>Sept 2016-April 2020:</strong> Carleton University, Bachelor of Computer Science, Honours with High Distinction</li>
            <ul>
              <li>11.95 / 12.0 GPA</li>
              <li>Chancellor's Scholarship Recipient</li>
              <li>Dean's Honour List (2016-2020)</li>
              <li>Senate Medal Recipient</li>
            </ul>
          </ul>
          {close}
        </article>

        <article
          id="posts"
          className={`${this.props.article === 'posts' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Blog posts  &amp; talks</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
