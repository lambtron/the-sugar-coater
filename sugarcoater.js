'use strict';

(function () {

	var natural = require('natural');
	var officeClassifier = new natural.BayesClassifier();
	var genderClassifier = new natural.BayesClassifier();
	var responses = [];
	var _ = require('underscore');

	module.exports = {
		getMessage: function getMessage (input) {
			// see what message it is.
			var gender = getGender(input);	// dude, chick
			var office = getOffice(input); // office, nonoffice

			// search through responses.
			// iterate through responses array
			// for all objects with .tags matching, save to new array
			var potentialResponses = [];
			for (var i = 0; i < responses.length; i++) {
				if (responses[i].tags.indexOf(gender) > 0 ||
					responses[i].tags.indexOf(office)) {
					potentialResponses.push(responses[i].msg);
				}
			}

			// randomly choose one from potentialResponses
			return potentialResponses[Math.floor(Math.random() *
				potentialResponses.length) + 1];
		}
	};

	trainSugarCoater();
	initializeResponses();

	function trainSugarCoater () {
		var chick = [
			"Die in a fire, fucking bitch!",
			"Suck your own clit, cuntface.",
			"Lobotomized professional victim, quit crying.",
			"Keep complaining, slutface. Nobody cares.",
			"Start getting cats because you are a cat lady"
		];

		var dude = [
			"Go to hell, you douchebag tool.",
			"Hey, assclown, fall on a dildo.",
			"Go to hell, numbnuts.",
			"Hey, fuckface, clueless dickwad, loser.",
			"Choke on a tampon, shithead.",
			"Die slowly, motherfucker.",
			"Hey, human hard-on, all of humanity is ashamed of you.",
			"Fuck off, motherfucker."
		];

		var office = [
			"Quit putting us to sleep, you boring, lazy fuck.",
			"Everytime I see you, I pray for layoffs, asshole.",
			"When are they going to fire you, waste of space.",
			"How do you even have a job?",
			"My boss eats pieces of shit like you for breakfast",
			"Your supervisor doesn't know what he's doing",
			"Can you send in your memo finally?",
			"You missed your deadline!",
			"Where did you put my stapler?",
			"Meet at the watercooler now",
			"The entire office hates you now",
			"Way to place last in our office fantasy league",
			"They stopped paying you years ago"
		];

	  officeClassifier.addDocument(office, 'office');
	  officeClassifier.addDocument('', 'notoffice');
	  genderClassifier.addDocument(dude, 'dude');
	  genderClassifier.addDocument(chick, 'chick');

	  officeClassifier.train();
	  genderClassifier.train();
	}

	function initializeResponses () {
	  responses = [
	    {
	    	msg: "I love your shabby chic aesthetic!",
	    	tags: ["chick", "office", "nonoffice"]
	    },
	    {
	    	msg: "Maybe you can take me thrift shopping sometime? You're so good at it.",
	    	tags: ["chick", "office", "nonoffice"]
	    },
	    {
	    	msg: "It's great that you wore that. You are so comfortable in your own skin.",
	    	tags: ["chick", "office", "nonoffice"]
	    },
	    {
	    	msg: "You just never let working with smart people intimidate you. I think that's so brave.",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "I admire you for not giving in to the pressure to botox.",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "You're only ___?  You seem so mature for your age.",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "You watch a lot of reality tv, right?  Maybe you \"can help me understand this...",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "You are so knowledgeable about reality TV and pop culture.",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "I defer to your experience.  Of course, you are much closer to these things than I am.",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "Was that blouse another street find?  Your dedication to recycling is so inspiring. I love how you are saving the planet one outfit at a time.",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "My cousin is a little slow. You know the one. He went to your college, I think?",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "My cousin, you know, the slow one? He has really unique taste. Can you help me with gift ideas for him?",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "You just don't care what other people think. I really admire that about you.",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "It's so cool how you don't care what poeple think of you.",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "You're so good at not letting what other people say about you bother you. I really admire that.",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "I love how you just don't care.",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "Dude, that's cool that you decided to date a smart girl.  Everybody's so hung up on looks.",
	    	tags: ["dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "Are you an only child?",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "Are you an actress?",
	    	tags: ["chick", "office", "nonoffice"]
	    },
	    {
	    	msg: "Have you ever thought of growing a beard?",
	    	tags: ["dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "It's so great that you have so much time to spend on Facebook. I always see you on there.",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "It's great how you are willing to stretch yourself and do things that don't come naturally to you.",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "We all admire how hard you try.",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "When are you due?!",
	    	tags: ["chick", "office", "nonoffice"]
	    },
	    {
	    	msg: "It's so exciting that your wife is pregnant.",
	    	tags: ["dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "It's great that you posted that selfie. I love how unvain you are.",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "Wow, you really remind me of my mother. (Leave hanging and unclarified the question of whether your mother is an unspeakably heinous human being.)",
	    	tags: ["chick", "office", "nonoffice"]
	    },
	    {
	    	msg: "Wow, you really remind me of my mother. Before she went into therapy.",
	    	tags: ["chick", "office", "nonoffice"]
	    },
	    {
	    	msg: "Wow, you look good in make up!",
	    	tags: ["chick", "office", "nonoffice"]
	    },
	    {
	    	msg: "This looks good. I don't know what they were talking about.",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "Are you tired? You look tired.",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "Give candy bar twelve pack as gift.",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "Give diet candy as gift",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "Walk or drive very slowly in front of person. Smile and waive when they pass.",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "Regift gift back to person who gave it to you...in different wrapping paper.",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "Regift something you received from this person to a third person...in their presence.",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "Start offering candy or desert and then stop midway.  \"Oh, I'm sorry. You're dieting, right? Nevermind.\"",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "I'm sorry, I wasn't being clear when I gave instructions. It's my fault you fucked it up.",
	    	tags: ["office", "chick", "dude"]
	    },
			{
				msg: "Think of getting fired as a blessing. Now you can find a job you're really good at.",
	    	tags: ["office", "chick", "dude"]
	    },
	    {
				msg: "Sorry to keep you waiting--I needed to finish reading this article about Gwyneth Paltrow.",
	    	tags: ["office", "chick", "dude"]
	    },
			{
				msg: "In response to photo hanging in their workspace: \"Wow, you used to be so pretty!\"",
	    	tags: ["office", "chick", "dude"]
	    },
			{
				msg: "You never let working with smart people intimidate you.  That's so cool.",
	    	tags: ["office", "chick", "dude"]
	    },
			{
				msg: "Your wife makes a decent living, right?  So you’ll be okay.",
				tags: ["office", "dude"]
			},
			{
				msg: "Congrats on the new ____! I hope it goes better than the last one.",
				tags: ["nonoffice", "chick", "dude"]
			},
			{
				msg: "You're so brave to eat so many calories without a plan to burn them off.",
				tags: ["nonoffice", "chick", "dude"]
			}
	  ];
	}

	function getOffice (line) {
	  return officeClassifier.classify(line);
	}

	function getGender (line) {
	  return genderClassifier.classify(line);
	}

}());