import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";
import image from "../components/image"
import header_wifeImg from "../images/header_wife.jpg"
import header_husbandImg from "../images/header_husband.jpg"
import twitter_husbandImg from "../images/icon_husband.png"
//import jigyo1Img from "../images/jigyo1.jpg"
import jigyo2Img from "../images/jigyo2.jpg"
import jigyo3Img from "../images/jigyo3.jpg"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Row style={{maxWidth:`960px`}}> 
        <img src={header_wifeImg} style={{width:`100%`,marginBottom:`0rem`}} />
        <img src={header_husbandImg} style={{width:`100%`,marginBottom:`2rem`}} />
    </Row>
    <Row>
      <Col xs={12} md={6} style={{maxWidth:`480px`}}>
        <Row>
          <Col style={{backgroundColor:`cornflowerblue`,color:`white`,padding:`0.5rem`}}>最新記事</Col>
        </Row>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Row>
            <Col style={{padding:`0.5rem`}}>
              <Link to={`/${node.fields.slug}`}>
              {node.frontmatter.date}記事{`　`}{node.frontmatter.title}
              </Link>
            </Col>
          </Row>
        ))}
      </Col>
      <Col xs={12} md={6} style={{maxWidth:`480px`}}>
        <Row>
          <Col style={{backgroundColor:`cornflowerblue`,color:`white`,padding:`0.5rem`}}>書いている人</Col>
        </Row>
        <Row>
          <Col style={{padding:`0.5rem`}}>プロフィール</Col>
        </Row>
        <Row>
          <Col style={{padding:`0.5rem`}}>SNS</Col>
        </Row>
        <Row>
          <Col style={{padding:`0.5rem`}}>広告スペース</Col>
        </Row>
        <Row>
          <Col style={{padding:`0.5rem`}}>広告スペース</Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col style={{backgroundColor:`cornflowerblue`,color:`white`,padding:`0.5rem`,maxWidth:`960px`,marginTop:`2rem`}}>SNS</Col>
    </Row>
    <Row>
      <Col style={{maxWidth:`960px`}}>
        <Row>
          <Col xs={6} md={4}>
            <Card style={{marginTop:`1rem`}}>
              <Card.Img variant="top" src={twitter_husbandImg} alt={`Twitter`} />
              <Card.Body>
                <Card.Title style={{fontSize:`1rem`}}>https://twitter.com/amamiya_couple</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card style={{marginTop:`1rem`}}>
              <Card.Img variant="top" src={jigyo2Img} alt={`テレポーテーションゲート開設`} />
              <Card.Body>
                <Card.Title style={{fontSize:`1rem`}}>テレポーテーションゲート開設</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card style={{marginTop:`1rem`}}>
              <Card.Img variant="top" src={jigyo3Img} alt={`業子力学による量子コントロール`} />
              <Card.Body>
                <Card.Title style={{fontSize:`1rem`}}>業子力学による量子コントロール</Card.Title>
              </Card.Body>
            </Card>
          </Col>
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
        limit: 4, sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "YYYY年MM月DD日")
          }
          fields {
            slug
          }
        }
      }
    }
  }  
`