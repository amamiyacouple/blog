import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";
//import image from "../components/image"
//import header_wifeImg from "../images/header_wife.jpg"
import header_husbandImg from "../images/header_husband.jpg"
import twitter_husbandImg from "../images/icon_husband.png"
//import jigyo1Img from "../images/jigyo1.jpg"
//import jigyo2Img from "../images/jigyo2.jpg"
//import jigyo3Img from "../images/jigyo3.jpg"

//        <img src={header_wifeImg} style={{width:`100%`,marginBottom:`0rem`}} />

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Row style={{maxWidth:`960px`}}> 
        <img src={header_husbandImg} style={{width:`100%`,marginBottom:`2rem`}} />
    </Row>
    <Row>
      <Col xs={12} md={12} style={{maxWidth:`960px`}}>
        <Row>
          <Col style={{backgroundColor:`cornflowerblue`,color:`white`,padding:`0.5rem`}}>記事20:54</Col>
        </Row>
        <Row>
        {data.allMarkdownRemark.edges.map(({ node }) => (
            <Col xs={12} md={12} style={{padding:`0.5rem`}}>
              <Card style={{marginTop:'1rem'}}>
                <Card.Body>
                  <Card.Title>
                    <Link to={`/${node.fields.slug}`}>
                      {node.frontmatter.title}
                    </Link>
                  </Card.Title>
                  <Card.Text>
                    {node.excerpt}
                  </Card.Text>
                  <Card.Text style={{textAlign:'left'}}>
                    {`　`}{node.frontmatter.date}更新
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
        ))}
        </Row>
      </Col>
    </Row>
    <Row>
      <Col style={{backgroundColor:`cornflowerblue`,color:`white`,padding:`0.5rem`,maxWidth:`960px`,marginTop:`2rem`}}>SNS</Col>
    </Row>
    <Row>
      <Col style={{maxWidth:`960px`}}>
        <Row>
          <Col style={{textAlign:'center'}}>
            <img src={twitter_husbandImg} style={{width:`20%`,padding:`0.5rem`}} />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} style={{textAlign:'center'}}>
            <div class="twitter">
            <a 
              href="https://twitter.com/amamiya_couple?ref_src=twsrc%5Etfw"
              class="twitter-follow-button"
              data-show-count="true"
              data-lang="ja">Follow @amamiya_couple
            </a>
            {<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>}
            </div>
          </Col>
        </Row>
        <Row>
          <Col style={{backgroundColor:`white`,color:`black`,padding:`0.5rem`,textAlign:'center',fontWeight:'bold'}}>雨宮夫</Col>
        </Row>
        <Row>
          <Col style={{backgroundColor:`white`,color:`black`,padding:`0.5rem`,textAlign:'center'}}>1987年生まれのサラリーマンです。</Col>
        </Row>
        <Row>
          <Col style={{backgroundColor:`white`,color:`black`,padding:`0.5rem`,textAlign:'center'}}>時価総額10兆円越え企業に勤務しています。</Col>
        </Row>
        <Row>
          <Col style={{backgroundColor:`white`,color:`black`,padding:`0.5rem`,textAlign:'center'}}>資産運用/勉強/仕事/転職/婚活術について発信しています。</Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col style={{maxWidth:`960px`, paddingTop:`3rem`}}></Col>
    </Row>
  </Layout>
);

export default IndexPage;

export const query = graphql`
query {
    allMarkdownRemark(
        limit: 5, sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "YYYY年MM月DD日")
            hero {
              childImageSharp {
                fixed(width:128,height:128){
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }  
`