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
			"Start getting cats because you are a cat lady",
			"Keep talking, someday you'll say something intelligent.",
			"I thought of you all day today. I was at the zoo.",
			"I'll never forget the first time we met - although I'll keep trying.",
			"Every girl has the right to be ugly, but you abused the privilege.",
			"Do you still love nature, despite what it did to you?",
			"Your so narrow minded when you walk your earings knock together.",
			"Your lucky to be born beautiful, unlike me, who was born to be a big liar.",
			"Before you came along we were hungry. Now we are fed up.",
			"Someone said that you are not fit to sleep with pigs. I stuck up for the pigs.",
			"You have a lot of well-wishers. They would all like to throw you down one."
		];

		var dude = [
			"Go to hell, you douchebag tool.",
			"Hey, assclown, fall on a dildo.",
			"Go to hell, numbnuts.",
			"Hey, fuckface, clueless dickwad, loser.",
			"Choke on a tampon, shithead.",
			"Die slowly, motherfucker.",
			"Hey, human hard-on, all of humanity is ashamed of you.",
			"Fuck off, motherfucker.",
			"If you stand close enough to him, you can hear the ocean.",
			"There is no vaccine against stupidity.",
			"I heard you got a brain transplant and the brain rejected you!",
			"I'd like to leave you with one thought, but I'm not sure you have anywhere to put it!",
			"I'd love to go out with you, but my favorite commercial is on TV.",
			"I'd like to see things from your point of view but I can't seem to get my head that far up my ass.",
			"He's not stupid; he's possessed by a retarded ghost.",
			"He is the kind of a man that you could use as a blueprint to build an idiot.",
			"If you were my dog, I'd shave your butt and teach you to walk backwards.",
			"You've got an IQ of 2. Pitty it takes 3 to grunt."
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
			"They stopped paying you years ago",
			"Ahhh...I see the fuck-up fairy has visited us again...",
			"I don't know what your problem is, but I'll bet it's hard to pronounce.",
			"How about never? Is never good for you?",
			"I see you've set aside this special time to humiliate yourself in public.",
			"I'm really easy to get along with once you people learn to worship me.",
			"I'll try being nicer if you'll try being smarter.",
			"I'm out of my mind, but feel free to leave a message...",
			"I don't work here. I'm a consultant.",
			"It sounds like English, but I can't understand a word you're saying.",
			"I can see your point, but I still think you're full of shit.",
			"I like you. You remind me of when I was young and stupid.",
			"You are validating my inherent mistrust of strangers.",
			"I have plenty of talent and vision. I just don't give a damn.",
			"I'm already visualizing the duct tape over your mouth.",
			"I will always cherish the initial misconceptions I had about you.",
			"Thank you. We're all refreshed and challenged by your unique point of view.",
			"The fact that no one understands you doesn't mean you're an artist.",
			"Any connection between your reality and mine is purely coincidental.",
			"What am I? Flypaper for freaks!?",
			"I'm not being rude. You're just insignificant.",
			"It's a thankless job, but I've got a lot of Karma to burn off.",
			"Yes, I am an agent of Satan, but my duties are largely ceremonial.",
			"No, my powers can only be used for good.",
			"You sound reasonable... Time to up the medication.",
			"Who me? I just wander from room to room",
			"And your crybaby whiny-ass opinion would be...?",
			"Do I look like a fucking people person?",
			"This isn't an office. It's Hell with fluorescent lighting.",
			"I started out with nothing & still have most of it left.",
			"You!... Off my planet!",
			"Does your train of thought have a caboose?",
			"Errors have been made. Others will be blamed.",
			"A PBS mind in an MTV world.",
			"Allow me to introduce my selves.",
			"Whatever kind of look you were going for, you missed.",
			"Well, this day was a total waste of makeup.",
			"Not all men are annoying. Some are dead.",
			"I'm trying to imagine you with a personality.",
			"A cubicle is just a padded cell without a door.",
			"Stress is when you wake up screaming & you realize you haven't fallen asleep yet.",
			"Can I trade this job for what's behind door 1?",
			"Too many freaks, not enough circuses.",
			"Nice perfume. Must you marinate in it?",
			"Chaos, panic, & disorder - my work here is done.",
			"How do I set a laser printer to stun?",
			"I thought I wanted a career, turns out I just wanted the paychecks.",
			"If I throw a stick, will you leave?",
			"Sarcasm is just one more service we offer."
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
		  	msg: "\"Think of getting fired as a blessing. Now you can find a job you're really good at.\"",
		  	tags: ["dude", "chick", "office"]
		  },
		  {
		  	msg: "\"It’s so brave of you to age naturally\"",
		  	tags: ["chick", "nonoffice", "office"]
		  },
		  {
		  	msg: "\"Oh, I didn't realize you meant now.\"",
		  	tags: ["dude", "chick", "office", "nonoffice"]
		  },
		  {
		  	msg: "Like the responses to your friend's facebook posts, but never like your friend's original posts themselves.",
		  	tags: ["dude", "chick", "nonoffice", "office"]
		  },
		  {
		  	msg: "\"I'm not mad. I'm just disappointed.\"",
		  	tags: ["dude", "chick", "nonoffice", "office"]
		  },
		  {
		  	msg: "\"Are you still driving your old car?\"",
		  	tags: ["dude", "chick", "nonoffice", "office"]
		  },
	  	{
	  		msg: "\"So, you’re what they call a metrosexual?\"",
	  		tags: ["dude", "office", "nonoffice"]
	  	},
	  	{
	  		msg: "\"Wow! I've never seen you wear a tie!\"",
	  		tags: ["dude", "office", "nonoffice"]
	  	},
	    {
	    	msg: "\"I love your shabby chic aesthetic!\"",
	    	tags: ["chick", "office", "nonoffice"]
	    },
	    {
	    	msg: "\"Maybe you can take me thrift shopping sometime? You're so good at it.\"",
	    	tags: ["chick", "office", "nonoffice"]
	    },
	    {
	    	msg: "\"It's great that you wore that. You are so comfortable in your own skin.\"",
	    	tags: ["chick", "office", "nonoffice"]
	    },
	    {
	    	msg: "\"You just never let working with smart people intimidate you. I think that's so brave.\"",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "\"I admire you for not giving in to the pressure to botox.\"",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "\"You're only ___? You seem so mature for your age.\"",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "\"You watch a lot of reality tv, right? Maybe you can help me understand this...\"",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "\"You'd know more about this than me.  It's from way before my time.\"",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "\"Was that blouse another street find? Your dedication to recycling is so inspiring. I love how you are saving the planet one outfit at a time!\"",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
				msg: "\"Wait, you're not forty yet?\"",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "\"My cousin is a little slow. You know him, right? He went to college with you, I think.\"",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "\"My cousin, you know, the strange one? I thought you'd be the perfect person to help me with gift ideas for him. Your taste is just so special.\"",
	    	tags: ["chick", "dude", "office", "nonoffice"]
			},
	    {
	    	msg: "\"Your style is...unique. You're really brave.\"",
	    	tags: ["chick", "dude", "office", "nonoffice"]
 			},
	    {
	    	msg: "\"That's not a tattoo?\"",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "\"It's so cool how little you care.\"",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "\"You're so good at not letting what other people say about you bother you. I really admire that.\"",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "\"I love how relaxed you are. It's like you don't even try.\"",
	    	tags: ["chick", "dude", "office", "nonoffice"]
 			},
	    {
	    	msg: "\"How's that project of yours going? You know, the cute one.\"",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "\"Dude, that's cool that you decided to date a smart girl. People are too hung up on looks.\"",
	    	tags: ["dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "\"Are you an only child?\"",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "\"Are you an actress?\"",
	    	tags: ["chick", "office", "nonoffice"]
	    },
	    {
	    	msg: "\"Have you ever considered growing a beard?\"",
	    	tags: ["dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "\"It's so great that you have so much time to spend on Facebook. I always see you on there.\"",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "\"It's great how you are willing to stretch yourself and do things that don't come naturally to you.\"",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "\"We all admire how hard you try.\"",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "\"OMG!  When are you due??!!\"",
	    	tags: ["chick", "office", "nonoffice"]
	    },
	    {
	    	msg: "\"I think I saw your wife yesterday. That's wonderful that she's expecting!\"",
	    	tags: ["dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "\"It's great that you posted that selfie. I love how unvain you are.\"",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "\"You are so much like my sister, the one with borderline personality disorder.\"",
	    	tags: ["chick", "office", "nonoffice"]
	    },
	    {
	    	msg: "\"Wow, you really remind me of my mother. Before she went into therapy.\"",
	    	tags: ["chick", "office", "nonoffice"]
	    },
	    {
	    	msg: "\"Wow, you look good in make up!\"",
	    	tags: ["chick", "office", "nonoffice"]
	    },
	    {
	    	msg: "\"This looks good. I don't know what they were talking about.\"",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "\"Are you tired? You look tired.\"",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "\"You're not stupid.  Don't let what people say about you bother you.\"",
	    	tags: ["chick", "dude", "office", "nonoffice"]

	    },
	    {
	    	msg: "Give them candy bar twelve pack as gift.",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "Give them diet candy as gift.",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "Blocking them as much as possible, drive extremely slowly in front of them. Smile and waive enthusiastically as they finally pass.",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "Rewrap gift they gave you and give it back to them on their birthday. Don't acknowledge the \"coincidence.\"",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "In their presence, give something you received from them to another person.",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "Offer them some candy and then stop midway, exclaiming, \"Oh, I'm sorry. You're dieting, right? Nevermind.",
	    	tags: ["chick", "dude", "office", "nonoffice"]
	    },
	    {
	    	msg: "\"I'm sorry, I wasn't clear when I gave instructions. It's my fault you fucked it up.\"",
	    	tags: ["office", "chick", "dude"]
	    },
			{
				msg: "\"Maybe you'd be happier if you quit?\"",
	    	tags: ["office", "chick", "dude"]
	    },
	    {
				msg: "\"Sorry to keep you waiting--I needed to finish reading an article about Gwyneth Paltrow.\"",
	    	tags: ["office", "chick", "dude"]
	    },
			{
				msg: "Regarding an old photo hanging in their workspace: \"Wow, you used to be so pretty!\"",
	    	tags: ["office", "chick", "dude"]
	    },
			{
				msg: "\"You never let working with smart people intimidate you.  That's so cool.\"",
	    	tags: ["office", "chick", "dude"]
	    },
			{
				msg: "\"Your wife makes a decent living, right?  So, you don't really have to worry about it.\"",
				tags: ["office", "dude"]
			},
			{
				msg: "\"You're gonna get better at this. Don't be hard on yourself.\"",
				tags: ["office", "chick", "dude"]
			},
			{
				msg: "\"Maybe you’d be happier in a job where you work with your hands?\"",
				tags: ["nonoffice", "chick", "dude"]
			},
			{
				msg: "\"This looks good. You’re doing fine. I don't know what they were talking about.\"",
				tags: ["office", "chick", "dude"]
			},
			{
				msg: "To demonstrate their insignificance to you, never call this person by the right name.  When corrected, employ yet another wrong name in your distracted apology:  \"Oh, right, Tina.  I'm sorry.\"",
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