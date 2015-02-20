Carpool Collective: Save the environment, reduce traffic and make new friends.

Carpool Collective is an application to help users find others who want to share rides to and from the same places at the same time. Once a user joins a carpool they are added to that carpool page and can collaborate with others in their carpool group.

This application uses Ruby on Rails to provide backend support through a users and carpools API. This API is then consumed on the front-end through AngularJS. Users are matched to carpools based on the origin and destination address they request; this is done using the geocoder gem which geocodes latitude and longitude based on a provided address and also provides methods to search near a given address. 

v2 planned: 
- chat in each carpool so users can better collaborate
- google maps/waze api to show the addresses of the users
- additional styling and user interface design
