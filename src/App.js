import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './lang.json';
import { Title, Subtitle, Text, CoverText, Signature, Iconic } from './components/Text/Text';
import { MenuBar, MenuBarItem } from './components/MenuBar/MenuBar';
import { Image, ImageRow } from './components/Image/Image';
import { Card, CardRow } from './components/Card/Card';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { BackVideo } from './components/BackVideo/BackVideo';
import { ParallaxCover } from './components/ParallaxCover/ParallaxCover';
import { Cover } from './components/Cover/Cover';

import { ImageRowItem } from './objects/ImageRowItem';
import { CardRowItem } from './objects/CardRowItem';
import { ImageGalleryItem } from './objects/ImageGalleryItem';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const lang = require('./lang.json');
const host = window.location.href;
const language = ((host.substr(host.lastIndexOf(".") + 1)) === 'dk') ? 'da' : 'en';
const t = lang[language];

const trees = [
	new ImageRowItem(t.ux.tree1, "tree_1"),
	new ImageRowItem(t.ux.tree2, "tree_2"),
	new ImageRowItem(t.ux.tree3, "tree_3"),
	new ImageRowItem(t.ux.tree4, "tree_4")
];

const skills = [
	new ImageRowItem("Graphical design", "skill1"),
	new ImageRowItem("Web development", "skill2"),
	new ImageRowItem("App development", "skill3"),
	new ImageRowItem("User studies", "skill4"),
	new ImageRowItem("User studies", "skill4"),
	new ImageRowItem("User studies", "skill4")
];

const projects = [
	new CardRowItem("UXers", "In August 2018, I started my own company called UXers, with a desire to gain some experience on how to run a company. I offered companies a helping hand with understanding their customers, developing prototypes and doing graphical work. I was then contacted by Nilfisk and asked to work for them as an external partner.", "project-uxers"),
	
	new CardRowItem("Remote Support Dashboard", "My first project working for Nilfisk was to develop a remote support tool for monitoring their autonomous cleaning machines in the field, using Microsoft services. I worked on this project in close cooperation with some of their developers and robitics engineers.", "project-rstd"),
	
	new CardRowItem("Liberty Assist", "This project was about designing a mobile UI for a consumer application, that served the purpose of bringing insights about the cleaning machines, directly to the end-users. I learned a lot about designing for smartphones during this project.", "project-liberty-assist"),
	/*
	new CardRowItem("Liberty GUI", "Designing a graphical user interface for the autonomous cleaning machines was a huge challenge, where my prototyping and graphical skills was put to test. It is still very rewarding to see my work being used by so many people around the world.", "empty"),
	*/
	new CardRowItem("Text-Assistant", "As a part of creating tools for monotoring the autonomous machines, I also got to work on a text message service, where the articulation of user-friendly text was in scope.", "project-text-assistant"),
	
	new CardRowItem("Technician User Study", "I got the opportunity to create and facilitate a user study in Bellenberg (Germany) with technicians from all around the world. The purpose of the study was to gather information about the technicians needs and then develop a tool to support them in performing service to the autonomous machines. This was a challenging but also very rewarding project to be in charge of.", "project-user-study"),
	
	new CardRowItem("Detailed Machine View", "As a reault of the Technician User Study, I got to work on a tool to support the technicians in the field. This project required both my facilitaing, graphical and prototyping skills while working closely togther with a small agile team of developers, designers, and managers.", "project-dmv")
];

const cover = <Cover t={t}></Cover>;
const universe = <BackVideo></BackVideo>;

class App extends Component {
	
	render() {
		
		return (
			<div className="App" onClick={this.goto}>
				<ParallaxCover move="400" height="350px" position="relative" t={t} content={cover}/>
				<div id="intro" className="Section">
					<MenuBar/>
					<div position="paragraph" className="Container">
						<Subtitle text={t.intro.title}/>
						<Text size="small" text={t.intro.text1}/>
						<Text size="small" text={t.intro.text2}/>
						<Image id="me" name="me" format="png" width="470px"/>
					</div>
					<div className="Shadow"></div>
				</div>
				
				<div id="skills" className="Section">
					<ParallaxCover move="550" position="absolute" t={t} content={universe}></ParallaxCover>
					<div id="video-cover"></div>
					<div position="paragraph" className="Container">
						<Title color="white" text={t.skills.title}/>
						<Text size="medium" color="white" text={t.skills.text1}/>
					</div>
					<ImageRow id="skills-row" margin="50px 150px 10px 150px" items={skills} format="png" width="300px" color="white"/>
				</div>
				
				<div id="ux" className="Section">
					<div position="paragraph" className="Container">
						<Title text={t.ux.title}/>
						<Text size="medium" text={t.ux.text1}/>
						<ImageRow margin="50px 0px 10px 0px" items={trees} format="svg" width="120px" height="200px"/>
					</div>
				</div>
				
				<div id="projects" className="Section">
					<div position="paragraph" className="Container">
						<Title text={t.projects.title}/>
						<Text size="medium" text={t.projects.text1}/>
					</div>
					<CardRow size="250px" radius="10px" margin="50px 0px 10px 0px" items={projects} format="png"/>
				</div>
				
				<div id="contact" className="Section">
					<div position="paragraph" className="Container">
						<Title text={t.contact.title}/>
						<Text text={t.contact.text1}/>
						<div id="contact-info">
							<Iconic text="contact@kasper-ux.dk" icon="email"></Iconic>
							<Iconic text="+42 67 05 33" icon="phone"></Iconic>
							<Iconic text="kasper-ux" icon="linkedin"></Iconic>
							<Iconic text="Randers, Denmark" icon="location"></Iconic>
							<Text text={t.contact.text2}/>
						</div>
					</div>
				</div>
				
				<div id="footer" className="Section"></div>
			</div>
		);
	}
}

export default App;