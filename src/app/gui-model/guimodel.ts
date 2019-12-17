export class GuiModel {

    /* HINWEIS: Texte sind in der Datei ../example-translation-service.ts definiert.
    Erscheinen Texte in {}, so kann die Übersetzung in example-translation-service.ts definiert werden
    */

    private _guiModel = {
        "application": {
            "title": "My Italian Space (by Fabiana & Nicola)",
            "formList": [
                {
					// FORMULAR FÜR NEUER FREUND - ENTYTÄTSTYP FREUND
                    "id": "FriendForm",
                    "title": "Friend",
                    "url": "/friend",
                    "formFieldList": [ //BEGINN NEUER FREUND ANLEGEN
                        {	//ATTRIBUT FamilyName
                            "id": "familyName",
                            "type": "text",
                            "name": "FamilyName",
                            "width": 1,
                            "required": true
                        },
                        {	//ATTRIBUT FirstName
                            "id": "firstName",
                            "type": "text",
                            "name": "FirstName",
                            "width": 1,
                            "required": true
                        },
						{ 	//ATTRIBUT Nickname
							"id": "nickname",
							"type": "text",
							"name": "Nickname",
							"width": 2,
							"required": true
						},
                        {	//ATTRIBUT Location
                            "id":   "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "url": "/location",
                            "form": "LocationForm",
                            "width": 2
                        },
                        {	//ATTRIBUT Birthday
                            "id": "birthdate",
                            "type": "date",
                            "name": "Birthday",
                            "width": 2
                        },
						{	//ATTRIBUT Group
							"id": "group",
							"type": "autocomplete",
							"name": "Group",
							"url": "/group",
							"form": "GroupForm",
							"width": 2
						},
                        {	//ATTRIBUT Comments
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {	//TASTE Delete
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {	//TASTE Cancel
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {	//TASTE Ok
                            "type": "okButton",
                            "name": "Ok"
                        },
					] //ENDE FORMULAR FÜR NEUER FREUND ANLEGEN
                },
				
                {	// FORMULAR FÜR NEUER ORT - ENTYTÄTSTYP Location
                    "id": "LocationForm",
                    "title": "Location",
                    "url": "/location",
                    "formFieldList": [
                        {	//ATTRIBUT NAME
                            "id": "name",
                            "type": "text",
                            "name": "LocationName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ] //ENDE FORMULAR FÜR NEUE Location ANLEGEN
                },
				
                {	// FORMULAR FÜR NEUE AKTIVITÄT - ENTYTÄTSTYP activity
                    "id": "ActivityForm",
                    "title": "Activity",
                    "url": "/activity",
                    "formFieldList": [
         
						{
							"id":	"name",
							"type":	"text",
							"name": "Name",
							"width": 2,
							"required": true
						},
						{
							"id":	"date",
							"type":	"date",
							"name":	"Date",
							"width": 2,
							"required": true
						},
			            {
                            "id":   "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "url": "/location",
                            "form": "LocationForm",
                            "width": 2
                        },
			            {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ] //ENDE FORMULAR FÜR NEUE AKTIVITÄT ANLEGEN
                },
				{ // NEU NEU NEU
                    "id": "AddActivityForm",
                    "title": "Activity",
                    "url": "/friend/:friendKey/activity",
                    "formFieldList": [
                        {
                            "id":   "activity",
                            "type": "autocomplete",
                            "name": "Activity",
                            "url": "/activity",
                            "defaultKey": "activityKey",
                            "readonly": true,
                            "form": "ActivityForm",
                            "width": 2
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },			

				{	// FORMULAR FÜR NEUER AKTIVITÄT - ENTYTÄTSTYP Group
					"id": "GroupForm",
					"title": "Group",
					"url": "/group",
					"formFieldList": [
						{
							"id": "name",
							"type": "text",
							"name": "GroupName",
							"width": 2,
							"required": true
						},
						{
							"type": "deleteButton",
							"name": "Delete"
						},
						{
							"type": "cancelButton",
							"name": "Cancel"
						}, 
						{
							"type": "okButton",
							"name": "Ok"
						}
					] //ENDE FORMULAR FÜR EUE GRUPPE ANLEGEN
				}
            ],
			//ENDE ALLER FORMLISTS
			
			
			
            "pageList": [
                { // MAINMENU
                    "id": "mainmenu",
                    "name": "MainMenu",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Friends",
                            "icon": "fa-user",
                            "color": "blue",
                            "page": "friendspage",
							"width": 2
                        },
                        {
                            "type": "button",
                            "name": "Location",
                            "icon": "fa-city",
                            "color": "yellow",
                            "page": "locationspage",
							"width": 2
                        },
						{
							"type": "button",
							"name": "Groups",
							"icon": "fa-weixin",
							"color": "wisteria",
							"page": "groupspage",
							"width": 2
						},
						{
							"type": "button",
							"name": "Activities",
							"icon": "fa-calendar",
							"color": "red",
							"page": "activitypage",
							"width": 2
						}				
                    ]
                }, // ENDE MAINMENU
				
                {  // BEGINN SEITE FREUNDE
                    "id": "friendspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {	//BUTTON NEUER FREUND ANLEGEN
                            "type": "newButton",
                            "name": "NewFriend",
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                        {	//LISTE ALLER FREUNDE (inkl, SUCHE)
                            "type": "list",
                            "icon": "fa-user",
                            "color": "blue",
                            "search": true,
                            "url": "/friend",
							"page": "friendAllActivities"
							
                            /*
							"form": {							NICHT MEHR BENÖTIGT
                                "form": "FriendForm"			NICHT MEHR BENÖTIGT
                            }									NICHT MEHR BENÖTIGT
							*/								
                        },
                    ]
                }, // ENDE SEITE FREUNDE
				
                {  // BEGINN SEITE LOCATION
                    "id": "locationspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        { //BUTTON NEUE LOCATION ANLEGEN
                            "type": "newButton",
                            "name": "NewLocation",
                            "icon": "fa-city",
                            "color": "green",
                            "width": 2,
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                        { //LISTE ALLER FREUNDE
                            "type": "list",
                            "icon": "fa-city",
                            "color": "yellow",
                            "search": true,
                            "url": "/location",
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                    ]
                }, // ENDE SEITE LOCATION

				{  // BEGINN SEITE GRUPPE
					"id": "groupspage",
					"elementList": [
						{
							"type": "backbutton",
						}, 
						{ // BUTTON NEUE GRUPPE ANLEGEN
							"type": "newButton",
							"name": "NewGroup",
							"icon": "fa-weixin",
							"color": "green",
							"form": {
								"form": "GroupForm"
								} 
						},
						{ // LISTE ALLER GRUPPEN
							"type": "list",
							"icon": "fa-weixin",
							"color": "wisteria",
							"search": true,
							"url": "/group",
							"form": {
								"form": "GroupForm"
								}
						},
					]
				}, // ENDE SEITE GRUPPE

				{  // BEGINN SEITE AKTIVITÄT
					"id": "activitypage",
					"elementList": [
						{
							"type": "backbutton",
						}, 
						{ // BUTTON NEUE AKTIVITÄT ANLEGEN
							"type": "newButton",
							"name": "NewActivity",
							"icon": "fa-calendar",
							"color": "green",
							"width": 2,
							"form": {
								"form": "ActivityForm"
								}
						},
						{ // LISTE ALLER AKTIVITÄTEN
							"type": "list",
							"icon": "fa-calendar",
							"color": "red",
							"search": true,
							"url": "/activity",
							"page": "ActivityAllFriends",
							/*
							"form": {
								"form": "ActivityForm"
								}
							*/
						},
					] 
				}, // ENDE SEITE AKTIVITÄT
				
				{ // BEGINN SEITE FREUND-AKTIVITÄT
					"id": "friendAllActivities",
					"elementList": [
						{
							"type": "backbutton",
						},
						{
							"type":	"button",
							"name": "Edit Friend",
							"icon": "fa-user",
							"color": "green",
							"form": {
								"form": "FriendForm"
								}
						},
						{
							"type":	"button",
							"name": "Add Activity",
							"icon": "fa-calendar",
							"color": "green",
							"width": 2,
							"form": {
								"form": "AddActivityForm",
								}
						},
						{
							"type": "list",
							"icon":	"fa-calendar",
							"color": "red",
							"search": true,
							"url":	"/friend/:friendKey/activity",
							"form":	{
								"form": "AddActivityForm",
								}
						},
						
					]
				},	//ENDE SEITE FREUND-AKTIVITÄT
				
				{	//BEGINN SEITE AKTIVITÄT-FREUND
					"id":	"ActivityAllFriends",
					"elementList": [
						{
							"type": "backbutton",
						},
						{	
							"type":	"button",
							"name": "Edit Activity",
							"icon":	"fa-calendar",
							"color": "green",
							"width": 2,
							"form": {
								"form": "ActivityForm",
								}
						},
						{
							"type": "list",
							"icon": "fa-user",
							"color": "blue",
							"search": "true",
							"url": "/activity/:activityKey/friend",
							"form": {
								"form": "AddActivityForm",
								}
						},
					]		
				},			
							
							
		
            ] // ENDE PAGELISTS
			
        } // ENDE APPLICATION
		
    }; // ENDE guiMODEL

		


    get guiModel() {
        return this._guiModel;
    }
}
