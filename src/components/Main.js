import PropTypes from 'prop-types'
import React from 'react'
import portrait from '../images/portrait.jpg'

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
            <div class="flex-child-double">
              <img src={portrait} alt="Adrianna portrait"/>
            </div>
            <div class="flex-child">
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
          <span>I spent 4 years in Shopify's Dev Degree program, interning on various teams:</span>
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
          <div class="flex-grid-thirds">
            <div class="col box">
              MARCH 2020
              <br />
              <a href="https://shopify.engineering/refactoring-legacy-code-strangler-fig-pattern" target="_blank" rel="noreferrer">
                Refactoring Legacy Code with the Strangler Fig Pattern
              </a>
            </div>
            <div class="col box">
              APRIL 2020
              <br />
              <a href="https://5by5.tv/rubyonrails/313" target="_blank" rel="noreferrer">
                5by5 Ruby on Rails Podcast: Strangler Fig Pattern &amp; God Objects
              </a>
            </div>
            <div class="col box">
              NOV 2020
              <br />
              <a href="https://podcasts.apple.com/us/podcast/adrianna-chang-using-the-strangler-fig-pattern-at-shopify/id1459893010?i=1000498839958" target="_blank" rel="noreferrer">
                Robby Russell's Maintainable Podcast: Using the Strangler Fig Pattern at Shopify
              </a>
            </div>
          </div>
          <div class="flex-grid-thirds">
            <div class="col box">
              DEC 2020
              <br />
              <a href="https://www.youtube.com/watch?v=zZ95_5y_iPk" target="_blank" rel="noreferrer">
                The Legacy of SoCraTes Conference 2020: Refactoring Large Objects with the Strangler Fig Pattern
              </a>
            </div>
          </div>
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
          <p>
            You can find me on the following platforms. Come say hi!
          </p>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/adriannakchang"
                className="icon fa-twitter"
                target="_blank"
                rel="noreferrer"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/adrianna-chang-42464796"
                className="icon fa-linkedin"
                target="_blank"
                rel="noreferrer"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/adrianna-chang-shopify"
                className="icon fa-github"
                target="_blank"
                rel="noreferrer"
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
