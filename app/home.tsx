"use client"

import React from 'react';
import Tagline from "../src/client/components/home/tagline/Tagline";
import HeroBid from "../src/client/components/home/hero-bid/HeroBid";
import Feed from "../src/client/components/home/feed/Feed";
import Prefooter from "../src/client/components/home/prefooter/Prefooter";
import TopCreators from "../src/client/components/home/top-creators/TopCreators";
import HotBid from "../src/client/components/home/hot-bid/HotBid";
import HotCollections from "../src/client/components/home/hot-collections/HotCollections";
import Discover from "../src/client/components/home/discover/Discover";

const Home = () => {
	return (
		<>
			<Tagline />
			<HeroBid />
			<Feed />
			<TopCreators />
			<HotBid />
			<HotCollections />
			{/*<Discover />*/}
			<Prefooter />
		</>
	);
};

export default Home;