import React, { useEffect } from "react";
import { Image } from 'expo-image';
import CollectionsFeedPageTemplate from "@/src/components/CollectionsFeedPageTemplate";
import Head from "expo-router/head";
import { useAppDispatch, useAppSelector } from "@/src/utils/hooks/redux";
import { fetchData } from "@/store/redusers/dataReducers/combineDataReducer/allDataSlice";


const AlltemsFeedPage = () => {
  
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchData()); 
  }, []);
  const data = useAppSelector((state) => state.allDataSlice);

  return (
    <>
    <Head>
          <title>Static React Web & App Builder</title>
          <meta name="description" content="Create dynamic and optimized digital experiences with our cutting-edge technology stack based on React and React Native. Craft static Progressive Web Apps (PWAs), sleek Single Page Applications (SPAs), as well as powerful Native iOS & Android Apps. Our expertise lies in leveraging the potential of Expo Router v2 to ensure seamless navigation and user interaction. With a keen focus on SEO-friendly designs, we are your go-to choice for building modern, responsive, and high-performing applications that captivate audiences across platforms." />

          <meta property="og:type" content="article" />
          <meta
            property="og:title"
            content="Static React Web & App Builder"
          />
          <meta
            property="og:description"
            content="Create dynamic and optimized digital experiences with our cutting-edge technology stack based on React and React Native. Craft static Progressive Web Apps (PWAs), sleek Single Page Applications (SPAs), as well as powerful Native iOS & Android Apps. Our expertise lies in leveraging the potential of Expo Router v2 to ensure seamless navigation and user interaction. With a keen focus on SEO-friendly designs, we are your go-to choice for building modern, responsive, and high-performing applications that captivate audiences across platforms."
          />
          <meta property="og:image" content={require("@/assets/images/author.jpeg")} />
          <meta property="og:url" content="PERMALINK" />
          <meta property="og:site_name" content="REACT STATIC APP FOR SEO AND NATIVE APPS FROM EXPO-ROUTER v2" />

          <meta name="twitter:title" content="Static React Web & App Builder" />
          <meta
            name="twitter:description"
            content="Create dynamic and optimized digital experiences with our cutting-edge technology stack based on React and React Native. Craft static Progressive Web Apps (PWAs), sleek Single Page Applications (SPAs), as well as powerful Native iOS & Android Apps. Our expertise lies in leveraging the potential of Expo Router v2 to ensure seamless navigation and user interaction. With a keen focus on SEO-friendly designs, we are your go-to choice for building modern, responsive, and high-performing applications that captivate audiences across platforms."
          />
          <meta name="twitter:image" content={require("@/assets/images/author.jpeg")} />
          <meta name="twitter:site" content="@BOLSHIYANOV" />
          <meta name="twitter:creator" content="@BOLSHIYANOV" />
          </Head>
  <CollectionsFeedPageTemplate data={data} />
  </>
  )
};

export default AlltemsFeedPage;