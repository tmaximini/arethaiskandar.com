import React from "react"

import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import TextElement from "../components/text-element"
import SEO from "../components/seo"

const ImprintPage = ({ data }) => {
  console.info({ data })
  return (
    <Layout light showBackdrop>
      <SEO title="Imprint" />
      <div className="content">
        <TextElement>
          <h3>Imprint</h3>
          <div className="inner">
            <h4>Photo Credits</h4>

            <p>
              Most photos on this website are taken by{" "}
              <a href="https://www.instagram.com/nlprt/">
                Niels Porta Photography
              </a>
              .
            </p>

            <h4>Web Development</h4>

            <p>
              Web design and development by{" "}
              <a href="https://maxi.io">Thomas Maximini</a>.
            </p>

            <h4>Legal notice</h4>

            <p>Last updated: October 31, 2019</p>

            <p>
              arethaiskandar.com ("us", "we", or "our") uses cookies on the
              arethaiskandar.com website (the "Service"). By using the Service,
              you consent to the use of cookies.
            </p>

            <p>
              Our Cookies Policy explains what cookies are, how we use cookies,
              how third-parties we may partner with may use cookies on the
              Service, your choices regarding cookies and further information
              about cookies. Our Cookies Policy for arethaiskandar.com is
              managed by{" "}
              <a href="https://www.privacypolicies.com/">Privacy Policies</a>.
            </p>

            <h2>What are cookies</h2>

            <p>
              Cookies are small pieces of text sent by your web browser by a
              website you visit. A cookie file is stored in your web browser and
              allows the Service or a third-party to recognize you and make your
              next visit easier and the Service more useful to you.
            </p>

            <p>
              Cookies can be "persistent" or "session" cookies. Persistent
              cookies remain on your personal computer or mobile device when you
              go offline, while session cookies are deleted as soon as you close
              your web browser.
            </p>

            <h2>How arethaiskandar.com uses cookies</h2>

            <p>
              When you use and access the Service, we may place a number of
              cookies files in your web browser.
            </p>

            <p>We use cookies for the following purposes:</p>

            <ul>
              <li>
                <p>Google Analytics</p>
              </li>
            </ul>

            <h2>What are your choices regarding cookies</h2>

            <p>
              If you'd like to delete cookies or instruct your web browser to
              delete or refuse cookies, please visit the help pages of your web
              browser. As an European citizen, under GDPR, you have certain
              individual rights. You can learn more about these rights in the{" "}
              <a href="https://termsfeed.com/blog/gdpr/#Individual_Rights_Under_the_GDPR">
                GDPR Guide
              </a>
              .
            </p>

            <p>
              Please note, however, that if you delete cookies or refuse to
              accept them, you might not be able to use all of the features we
              offer, you may not be able to store your preferences, and some of
              our pages might not display properly.
            </p>

            <ul>
              <li>
                For the Chrome web browser, please visit this page from Google:{" "}
                <a href="https://support.google.com/accounts/answer/32050">
                  https://support.google.com/accounts/answer/32050
                </a>
              </li>
              <li>
                For the Internet Explorer web browser, please visit this page
                from Microsoft:{" "}
                <a href="http://support.microsoft.com/kb/278835">
                  http://support.microsoft.com/kb/278835
                </a>
              </li>
              <li>
                For the Firefox web browser, please visit this page from
                Mozilla:{" "}
                <a href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored">
                  https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored
                </a>
              </li>
              <li>
                For the Safari web browser, please visit this page from Apple:{" "}
                <a href="https://support.apple.com/en-us/HT201265">
                  https://support.apple.com/en-us/HT201265
                </a>
              </li>
              <li>
                For any other web browser, please visit your web browser's
                official web pages.
              </li>
            </ul>

            <h2>Where can you find more information about cookies</h2>

            <p>
              You can learn more about cookies and the following third-party
              websites:
            </p>

            <ul>
              <li>
                AllAboutCookies:{" "}
                <a href="http://www.allaboutcookies.org/">
                  http://www.allaboutcookies.org/
                </a>
              </li>
              <li>
                Network Advertising Initiative:{" "}
                <a href="http://www.networkadvertising.org/">
                  http://www.networkadvertising.org/
                </a>
              </li>
            </ul>
          </div>
        </TextElement>
      </div>
    </Layout>
  )
}

export default ImprintPage
