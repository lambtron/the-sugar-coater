'use strict';

(function () {

	var natural = require('natural');
	var appearanceClassifier = new natural.BayesClassifier();
	var genderClassifier = new natural.BayesClassifier();
	var responses = [];
	var _ = require('underscore');

	module.exports = {
		getMessage: function getMessage (input) {
			// see what message it is.
			return output;
		}
	};

	trainSugarCoater();
	initializeResponses();

	function trainSugarCoater () {
	  appearanceClassifier.addDocument('', 'appearance');
	  appearanceClassifier.addDocument('', 'not appearance');
	  genderClassifier.addDocument('', 'dude');
	  genderClassifier.addDocument('', 'chick');
	}

	function initializeResponses () {
	  responses = [
	    {
	    	msg: "I love your shabby chic aesthetic!",
	    	tags: ["appearance", "chick"]
	    },
	    {
	    	msg: "Maybe you can take me thrift shopping sometime?  You're so good at it.",
	    	tags: ["appearance", "chick"]
	    },
	    {
	    	msg: "It's great that you wore that.  You are so comfortable in your own skin.",
	    	tags: ["appearance"]
	    },
	    {
	    	msg: "You just never let working with smart people intimidate you.  I think that's so brave.",
	    	tags: ["nonappearance"]
	    },
	    {
	    	msg: "I admire you for not giving in to the pressure to botox.",
	    	tags: ["appearance"]
	    },
	    {
	    	msg: "You're only ___?  You seem so mature for your age.",
	    	tags: ["nonappearance"]
	    },
	    {
	    	msg: "You watch a lot of reality tv, right?  Maybe you \"can help me understand this...",
	    	tags: ["nonappearance"]
	    },
	    {
	    	msg: "You are so knowledgeable about reality TV and pop culture.",
	    	tags: ["nonappearance"]
	    },
	    {
	    	msg: "I defer to your experience.  Of course, you are much closer to these things than I am.",
	    	tags: ["nonappearance"]
	    },
	    {
	    	msg: "Was that blouse another street find?  Your dedication to recycling is so inspiring. I love how you are saving the planet one outfit at a time.",
	    	tags: ["appearance"]
	    },
	    {
	    	msg: "My cousin is a little slow. You know the one. He went to your college, I think?",
	    	tags: ["nonappearance"]
	    },
	    {
	    	msg: "My cousin, you know, the slow one? He has really unique taste. Can you help me with gift ideas for him?",
	    	tags: ["nonappearance"]
	    },
	    {
	    	msg: "You just don't care what other people think. I really admire that about you.",
	    	tags: ["nonappearance"]
	    },
	    {
	    	msg: "It's so cool how you don't care what poeple think of you.",
	    	tags: ["nonappearance"]
	    },
	    {
	    	msg: "You're so good at not letting what other people say about you bother you. I really admire that.",
	    	tags: ["nonappearance"]
	    },
	    {
	    	msg: "I love how you just don't care.",
	    	tags: ["nonappearance"]
	    },
	    {
	    	msg: "Dude, that's cool that you decided to date a smart girl.  Everybody's so hung up on looks.",
	    	tags: ["nonappearance", "dude"]
	    },
	    {
	    	msg: "Are you an only child?",
	    	tags: ["nonappearance"]
	    },
	    {
	    	msg: "Are you an actress?",
	    	tags: ["chick"]
	    },
	    {
	    	msg: "Have you ever thought of growing a beard?",
	    	tags: ["dude"]
	    },
	    {
	    	msg: "It's so great that you have so much time to spend on Facebook. I always see you on there.",
	    	tags: ["nonappearance"]
	    },
	    {
	    	msg: "It's great how you are willing to stretch yourself and do things that don't come naturally to you.",
	    	tags: ["nonappearance"]
	    },
	    {
	    	msg: "We all admire how hard you try.",
	    	tags: ["nonappearance"]
	    },
	    {
	    	msg: "When are you due?!",
	    	tags: ["chick"]
	    },
	    {
	    	msg: "It's so exciting that your wife is pregnant.",
	    	tags: ["dude"]
	    },
	    {
	    	msg: "It's great that you posted that selfie. I love how unvain you are.",
	    	tags: ["nonappearance"]
	    },
	    {
	    	msg: "Wow, you really remind me of my mother. (Leave hanging and unclarified the question of whether your mother is an unspeakably heinous human being.)",
	    	tags: ["chick"]
	    },
	    {
	    	msg: "Wow, you really remind me of my mother. Before she went into therapy.",
	    	tags: ["chick"]
	    },
	    {
	    	msg: "Wow, you look good in make up!",
	    	tags: ["chick"]
	    },
	    {
	    	msg: "This looks good. I don't know what they were talking about.",
	    	tags: ["appearance"]
	    },
	    {
	    	msg: "Are you tired? You look tired.",
	    	tags: ["appearance"]
	    },
	    {
	    	msg: "Give candy bar twelve pack as gift.",
	    	tags: ["appearance"]
	    },
	    {
	    	msg: "Give diet candy as gift",
	    	tags: ["appearance"]
	    },
	    {
	    	msg: "Walk or drive very slowly in front of person. Smile and waive when they pass.",
	    	tags: ["nonappearance"]
	    },
	    {
	    	msg: "Regift gift back to person who gave it to you...in different wrapping paper.",
	    	tags: ["nonappearance"]
	    },
	    {
	    	msg: "Regift something you received from this person to a third person...in their presence.",
	    	tags: ["nonappearance"]
	    },
	    {
	    	msg: "Start offering candy or desert and then stop midway.  \"Oh, I'm sorry. You're dieting, right? Nevermind.\""
	    	tags: ["appearance"]
	    }
	  ];
	}

	function getAppearanceIndex (line) {
	  return appearanceClassifier.classify(line);
	}

	function getGender (line) {
	  return genderClassifier.classify(line);
	}

}());