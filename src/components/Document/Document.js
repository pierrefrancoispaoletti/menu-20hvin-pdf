import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import axios from "axios";
import React, { useEffect, useState } from "react";

const PdFDocument = ({ setLoading }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchFunction = async () => {
      const response = await axios({
        method: "GET",
        url: "https://backend20h20.herokuapp.com/api/products/getall",
      });

      setProducts(response.data.products);
      setLoading(false);
    };
    fetchFunction();
  }, []);

  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  console.log(products);

  const styles = StyleSheet.create({
    PageContent: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      color: "white",
    },
    LinkContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    ProductsContainer: {
      width: "100%",
      textAlign: "left",
      margin: "12px",
    },
    ProductsContainerH1: {
      textDecoration: "underline",
      fontSize: "22px",
      textTransform: "uppercase",
      textAlign: "center",
    },
    ProductTitleContainer: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
    },

    ProductTitleContainerH2: {
      textAlign: "left",
      fontSize: "20px",
      textTransform: "uppercase",
    },

    ProductTitleContainerH3: {
      fontSize: "20px",
      textAlign: "right",
      marginRight: "40px",
    },
    ProductContent: {
      fontSize: "15px",
      width: "80%",
      textAlign: "left",
      padding: "8px 0px",
    },
  });
  return (
    <Document>
      <Page style={{ backgroundColor: "#696969" }}>
        <View style={styles.PageContent}>
          {categories.map(
            (type, index) =>
              type !== "suggestions" && (
                <View key={index} id={type} style={styles.ProductsContainer}>
                  <Text style={styles.ProductsContainerH1}>
                    {type === "antipasti" ? "Coté Apéro" : type}
                  </Text>
                  {products
                    .sort((a, b) => (a.price > b.price ? 1 : -1))
                    .map(
                      (product) =>
                        product["category"] === type && (
                          <View
                            key={product._id}
                            style={styles.ProductsContainer}
                          >
                            <View style={styles.ProductTitleContainer}>
                              <Text style={styles.ProductTitleContainerH2}>
                                {product.title}
                              </Text>
                              <Text style={styles.ProductTitleContainerH3}>
                                {product.price.toFixed(2)} <small>€</small>
                              </Text>
                            </View>
                            {type !== "pasta" && (
                              <Text style={styles.ProductContent}>
                                {product.description}
                              </Text>
                            )}
                            {(type === "champagnes" || type === "vins") && (
                              <Text style={styles.ProductContent}>
                                {product.tag
                                  .sort((a, b) => (a > b ? 1 : -1))
                                  .join(", ")}
                              </Text>
                            )}
                          </View>
                        )
                    )}
                </View>
              )
          )}
        </View>
      </Page>
    </Document>
  );
};

export default PdFDocument;
