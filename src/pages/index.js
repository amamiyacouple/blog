import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";
//import image from "../components/image"
//import header_wifeImg from "../images/header_wife.jpg"
//import header_husbandImg from "../images/header_husband.jpg"
//import blogheaderImg from "../images/blogheader3.jpg"
import twitter_husbandImg from "../images/icon_husband.jpg"
import twitter_wifeImg from "../images/icon_wife.jpg"
//import jigyo1Img from "../images/jigyo1.jpg"
//import jigyo2Img from "../images/jigyo2.jpg"
//import jigyo3Img from "../images/jigyo3.jpg"

//        <img src={header_wifeImg} style={{width:`100%`,marginBottom:`0rem`}} />
//<Image filename="gatsby-astronaut.png" alt="Gatsbyスペースマン" />
//<Row style={{maxWidth:`960px`}}>
//<img src={blogheaderImg} style={{maxHeight:'100%',maxWidth:'100%', marginBottom:`2rem`}} />
//</Row> 

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Row>
      <Col xs={12} md={12} style={{maxWidth:`960px`}}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Card style={{marginBottom:'1rem'}}>
            <Card.Body>
              <Row>
                <Col style={{textAlign:'left'}}>
                  <Card.Title style={{fontWeight:'bold'}}>
                    <Link to={`/${node.fields.slug}`}>
                      {node.frontmatter.title}
                    </Link>
                  </Card.Title>
                  </Col>
              </Row>
              <Row>
                <Col style={{textAlign:'right'}}>
                  <Card.Text>
                    ⌚{node.frontmatter.date}
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))}
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={12} style={{maxWidth:`960px`,textAlign:'center'}}>
        <Row style={{backgroundColor:`white`,padding:`0.5rem`}}>
          <Col style={{textAlign:'center',color:'black',fontWeight:'bold',border:'solid 1px silver'}}> 
            書いている夫婦
          </Col>
        </Row>
        <Row>         
          <Col style={{textAlign:'center'}}>
            <img src={twitter_wifeImg} style={{maxWidth:`30%`,padding:`0.5rem`}} />
          </Col>
        </Row>
        <Row>
          <Col style={{padding:`0.5rem`,textAlign:'center',fontWeight:'bold'}}>
            雨宮妻
          </Col>
        </Row>
        <Row>
          <Col style={{textAlign:'center'}}>
            <div class="twitter">
              <a 
                href="https://twitter.com/amamiya_wife?ref_src=twsrc%5Etfw" 
                class="twitter-follow-button" 
                data-show-count="true"
                data-lang="ja">Follow @amamiya_wife
              </a>
              {<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>}
            </div>
          </Col>
        </Row>
        <Row>
          <Col style={{padding:`0.5rem`,textAlign:'center'}}>
            GAFA勤務の妻です。
          </Col>
        </Row>
        <Row>
          <Col style={{padding:`0.5rem`,textAlign:'center'}}>
            東京一工卒/英中トリリンガル(TOEIC970/HSK6)です。
          </Col>
        </Row>
        <Row>
          <Col style={{padding:`0.5rem`,textAlign:'center'}}>
            資産運用/語学/キャリア/転職/婚活術について発信しています。
          </Col>
        </Row>
        <Row>         
          <Col style={{textAlign:'center'}}>
            <img src={twitter_husbandImg} style={{maxWidth:`30%`,padding:`0.5rem`}} />
          </Col>
        </Row>
        <Row>
          <Col style={{padding:`0.5rem`,textAlign:'center',fontWeight:'bold'}}>
            雨宮夫
          </Col>
        </Row>
        <Row>
          <Col style={{textAlign:'center'}}>
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
          <Col style={{padding:`0.5rem`,textAlign:'center'}}>
            時価総額10兆円越え企業勤務の夫です。
          </Col>
        </Row>
        <Row>
          <Col style={{padding:`0.5rem`,textAlign:'center'}}>
            エンジニアです。
          </Col>
        </Row>
        <Row>
          <Col style={{padding:`0.5rem`,textAlign:'center'}}>
            仕事/転職/婚活/筋トレ/英語について発信しています。
          </Col>
        </Row>
      </Col>
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
            date(formatString: "YYYY/MM/DD")
            }
          }
          fields {
            slug
          }
        }
      }
    }
  `