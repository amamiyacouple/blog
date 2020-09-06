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
//<Image filename="gatsby-astronaut.png" alt="Gatsbyスペースマン" />

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Row style={{maxWidth:`960px`}}> 
        <img src={header_husbandImg} style={{width:`100%`,marginBottom:`2rem`}} />
    </Row>
    <Row>
      <Col xs={12} md={12} style={{maxWidth:`960px`}}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Card style={{marginBottom:'1rem'}}>
            <Card.Body>
              <Row>
                <Col style={{textAlign:'left'}}>
                  <Card.img>{node.frontmatter.img}</Card.img>
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
            書いている人
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
            1987年生まれのサラリーマンです。
            </Col>
        </Row>
        <Row>
          <Col style={{padding:`0.5rem`,textAlign:'center'}}>
            時価総額10兆円越え企業に勤務しています。
            </Col>
        </Row>
        <Row>
          <Col style={{padding:`0.5rem`,textAlign:'center'}}>
            資産運用/勉強/仕事/転職/婚活術について発信しています。
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
            img {
              childImageSharp {
                fluid(maxWidth: 960) {
                  ...GatsbyImageSharpFluid
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