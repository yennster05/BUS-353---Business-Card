// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

	//******ADAPTIVE FONT SIZING
var adaptiveHeadingFontSize = (Titanium.Platform.displayCaps.platformHeight*6)/100;
var adaptiveContentFontSize = (Titanium.Platform.displayCaps.platformHeight*4)/100;

var adaptiveSmallHeadingFontSize = (Titanium.Platform.displayCaps.platformHeight*5)/100;
var adaptiveSmallContentFontSize = (Titanium.Platform.displayCaps.platformHeight*3)/100;

	//END ADAPTIVE FONT SIZING

//FACEBOOK STUFF
var fb = require('facebook');
fb.appid = 975848059099933;

var data = {
    name : "Benton Garrett's business card",
    message : "Checkout Benton's business card!",
    caption : "It's really great!",
    picture : "http://i60.tinypic.com/qsl9mq.jpg",
};



var fbPostButton = Titanium.UI.createButton({
   title: 'Share my business card on Facebook',
   color: '#212121',
   backgroundColor:"#fff",
   image: '/images/facebook.png',
   top: 10,
   width: Ti.UI.FILL,
   borderRadius: '5',
   height: 50
});

fbPostButton.addEventListener('click',function(e){
	fb.dialog("feed", data, function(e) {
    if(e.success && e.result) {
        alert("Success! Thanks!");
    } else {
        if(e.error) {
            alert(e.error);
        } else {
        }
    }
});
});

//END FACEBOOK STUFF


var mainWindow = Titanium.UI.createWindow({
	backgroundColor: '#fff',
	barColor: '#0097A7',
	titleControl: Ti.UI.createLabel({
        text: 'Benton Garrett',
        color: '#fff',
        font : {
            fontSize : adaptiveSmallHeadingFontSize,
            fontWeight : 'bold'
        },
    })
});

var tab1 = Titanium.UI.createTab({
	title: 'Overview',
	icon:'/images/user.png',
	window: mainWindow
});

/*var myName = Titanium.UI.createLabel({
	color: '#000',
	text: 'Benton Garrett body',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

mainWindow.add(myName);
*/

var detailsWindow = Titanium.UI.createWindow({
	backgroundColor: '#fff',
	barColor: '#0097A7',
	titleControl: Ti.UI.createLabel({
        text: 'Benton Garrett',
        color: '#fff',
        font : {
            fontSize : adaptiveSmallHeadingFontSize,
            fontWeight : 'bold'
        },
    })
});

var tab2 = Titanium.UI.createTab({
	title: 'Details',
	barColor: '#fff',
	icon:'/images/document.png',
	window: detailsWindow
});

/*var contactMe = Titanium.UI.createLabel({
	color: '#000',
	text: 'Benton Garrett Details body',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

detailsWindow.add(contactMe);
*/

var tabGroup = Titanium.UI.createTabGroup({
	tabsBackgroundColor :'#fff',
	color: '#fff'
});

//*********************
//WINDOW DISPLAY CONTENT

	//*****CREATE SCROLL VIEWS
var view1 = Ti.UI.createScrollView({
    backgroundColor:'#00BCD4',
    contentHeight:'auto',
    contentWidth:'auto',
    layout: 'vertical',
});

var view2 = Ti.UI.createScrollView({
    backgroundColor:'#00BCD4',
    contentHeight:'auto',
    contentWidth:'auto',
    layout: 'vertical',
});

	//END CREATE SCROLL VIEWS
	
	//*****IMAGES
var myPortrait = Ti.UI.createImageView({
  image:'/images/me.jpg',
  top: '5'
});

	//END IMAGES

	//*****OVERVIEW LABELS
var myLocationHeading = Ti.UI.createLabel({
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	color:'#727272',
    text:'Location:',
    height:'auto',
    width:'100%',
    font: {
        fontSize:adaptiveHeadingFontSize
    }
});

var myLocationContent = Ti.UI.createLabel({
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	color: '#212121',
    text:'Moscow, Idaho\n',
    height:'auto',
    width:'100%',
    font: {
        fontSize:adaptiveContentFontSize
    }
});

var mySchoolHeading = Ti.UI.createLabel({
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	color:'#727272',
    text:'School:',
    height:'auto',
    width:'100%',
    font: {
        fontSize:adaptiveHeadingFontSize
    }
});

var mySchoolContent = Ti.UI.createLabel({
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	color: '#212121',
    text:'University of Idaho\n',
    height:'auto',
    width:'100%',
    font: {
        fontSize:adaptiveContentFontSize
    }
});

var myMajorHeading = Ti.UI.createLabel({
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	color:'#727272',
    text:'Major:',
    height:'auto',
    width:'100%',
    font: {
        fontSize:adaptiveHeadingFontSize
    }
});

var myMajorContent = Ti.UI.createLabel({
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	color: '#212121',
    text:'Business Information Systems\n',
    height:'auto',
    width:'100%',
    font: {
        fontSize:adaptiveContentFontSize
    }
});

var myEmailHeading = Ti.UI.createLabel({
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	color:'#727272',
    text:'Email:',
    height:'auto',
    width:'100%',
    font: {
        fontSize:adaptiveHeadingFontSize
    }
});

var myEmailContent = Ti.UI.createLabel({
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	color: '#212121',
    text:'bentongarrett@gmail.com\n',
    height:'auto',
    width:'100%',
    font: {
        fontSize:adaptiveContentFontSize
    }
});

	//END OVERVIEW LABELS

	//*****DETAILS LABELS
var myGraduationHeading = Ti.UI.createLabel({
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	color:'#727272',
    text:'Anticipated Graduation:',
    height:'auto',
    width:'100%',
    font: {
        fontSize:adaptiveSmallHeadingFontSize
    }
});

var myGraduationContent = Ti.UI.createLabel({
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	color: '#212121',
    text:'May 2016\n',
    height:'auto',
    width:'100%',
    font: {
        fontSize:adaptiveSmallContentFontSize
    }
});	

var myExperienceHeading = Ti.UI.createLabel({
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    text:'Experience:',
    color:'#727272',
    height:'auto',
    width:'100%',
    font: {
        fontSize:adaptiveSmallHeadingFontSize
    }
});

var myExperienceContent = Ti.UI.createLabel({
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	color: '#212121',
    text:'Worked at UI Payroll, Accounts Receivable, and IT Services\n',
    height:'auto',
    width:'100%',
    font: {
        fontSize:adaptiveSmallContentFontSize
    }
});

var myQualificationsHeading = Ti.UI.createLabel({
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	color:'#727272',
    text:'Qualifications:',
    height:'auto',
    width:'100%',
    font: {
        fontSize:adaptiveSmallHeadingFontSize
    }
});

var myQualificationsContent = Ti.UI.createLabel({
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	color: '#212121',
    text:'Comptia A+ certified computer technician, National Society of Collegiate Scholars\n',
    height:'auto',
    width:'100%',
    font: {
        fontSize:adaptiveSmallContentFontSize
    }
});

/*var myAspirationsHeading = Ti.UI.createLabel({
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    text:'Aspirations:',
    height:'auto',
    width:'100%',
    font: {
        fontSize:adaptiveSmallHeadingFontSize
    }
});

var myAspirationsContent = Ti.UI.createLabel({
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    text:'I hope to become a well-rounded web developer. To help in this effort, I am preparing myself to take part in an intensive coding bootcamp offered by Hack Reactor after college.\n',
    height:'auto',
    width:'100%',
    font: {
        fontSize:adaptiveSmallContentFontSize
    }
});
*/

var myEmailHeadingSmall = Ti.UI.createLabel({
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	color:'#727272',
    text:'Email:',
    height:'auto',
    width:'100%',
    font: {
        fontSize:adaptiveSmallHeadingFontSize
    }
});

var myEmailContentSmall = Ti.UI.createLabel({
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	color: '#212121',
    text:'bentongarrett@gmail.com\n',
    height:'auto',
    width:'100%',
    font: {
        fontSize:adaptiveSmallContentFontSize
    }
});

	//END DETAILS LABELS


	//*****MAIN WINDOW ADD STUFF
var scrollable1 = Ti.UI.createScrollableView({
	showVerticalScrollIndicator:true,
    views:[view1]
});

view1.add(myPortrait);
view1.add(myLocationHeading);
view1.add(myLocationContent);
view1.add(mySchoolHeading);
view1.add(mySchoolContent);
view1.add(myMajorHeading);
view1.add(myMajorContent);
view1.add(myEmailHeading);
view1.add(myEmailContent);

mainWindow.add(scrollable1);

	//END MAIN WINDOW ADD STUFF

	//*****DETAILS WINDOW ADD STUFF
var scrollable2 = Ti.UI.createScrollableView({
	showVerticalScrollIndicator:true,
    views:[view2]
});

view2.add(myGraduationHeading);
view2.add(myGraduationContent);
view2.add(myExperienceHeading);
view2.add(myExperienceContent);
view2.add(myQualificationsHeading);
view2.add(myQualificationsContent);
//view2.add(myAspirationsHeading);
//view2.add(myAspirationsContent);
view2.add(myEmailHeadingSmall);
view2.add(myEmailContentSmall);
view2.add(fbPostButton);

detailsWindow.add(scrollable2);

	//END DETAILS WINDOW ADD STUFF


//END WINDOW DISPLAY CONTENT


//EXPERIMENTING

//END EXPERIMENTING



//ADDING STUFF
tabGroup.addTab(tab1);
tabGroup.addTab(tab2);

tabGroup.open();
