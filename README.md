# Team-26 eHacks 2022: MealShip Executive Summary

**Contributors**: 
*Max Monciardini, Anjali Chauhan, Jinse Li, Emma Mansell*

## Inspiration
According to the USDA, more than 38 million people in the United States are food insecure, with these numbers only increasing during the pandemic. Many families that experience food insecurity do not qualify for federal nutrition programs and visit their local food banks and other food programs for extra support. MealShip aims to address two issues that the food-insecure population faces and the current alternatives do not address: decreasing food security and quality, and accessibility of food sources. Welfare programs are not available to everyone who is food-insecure. Food banks and soup kitchens have limited locations, which many do not have access to. Homeless individuals do not have regular access to kitchens or cooking supplies, even if they can get ingredients from food banks. For those seeking food support, there is a lack of choice. Finally, donors can only give prescriptively or indirectly.

## What it does
MealShip is a service that enables donors to provide meals to recipients through vendors. Donors can select the cost and number of meals they would like to provide. Recipients can select the restaurant of their choice once their meal request is fulfilled by a donor, and use their unique QR code to get the meal at the chosen vendor. After fulfillment, they can message the donor to thank them if they choose to do so. Recipients have the dignity of choice, without begging for cash or expending extra effort to transport themselves to a faraway food bank or soup kitchen. Donors have the opportunity to give directly to members of their community, as recipients will be within a selected geographic range. QR codes and in-app geotagging create ease of access for users on both ends.

## How we built it
For front-end design, we used Figma. We coded our frontend in Javascript, using the React Native framework on the Expo platform. For the backend, we used Express.js REST API for processing sign-up, meal requests, donations, and voucher redemptions. We used a PostgreSQL database. We used unsupervised machine learning techniques to build a authentication system that would tell us if the people signing up as a recipient is legitimate (in need) or not based on the data acquired from a carefully crafted questionnaire. The questionnaire was created through researching, studying different papers, surveys, scraping and discussions forums. Due to lack of data, we decided to use the variables/factors and threaholds found during our research and analysis for the questionnaire that could indicate a person in need (i.e. homelessness and food insecure) and built our own synthetic dataset for training and testing. Due to the time constraints, we couldn’t deploy our model using Heroku and Flask so we found a hack around this to build a working prototype. We used Google forms to get input for our questionnaire which is connected to Google Sheets so we Google Sheets API to connect our python script so we can pull the data in real time so whenever someone fills out the form after signup, we will be able to use our Anomaly Detection model to predict their legitimacy in real time.

## Challenges we ran into
Obviously, it wasn't expected from us, but we had difficulty implementing a full QR code transaction system in the limited amount of time at hand. Also, we envisioned creating a automated real-time machine learning model to analyze new recipients, but due to a lack of time we decided to go with a non-real-time approach.

## Accomplishments that we're proud of
We are proud of implementing a working prototype of the app, as well as the machine learning techniques we used to create the appropriate recipient user base to ensure transparency and accountability to all parties involved which is one of our core values and a value that sets us apart from our competition. More importantly, we are proud to address an issue we've seen in our own hometowns and build an app we would be excited to use.

## What we learned
Throughout the process of ideation and finalizing our platform, our group learned a lot about the lack of care for those experiencing food insecurity along with the poor resource management for solving these key issues. This motivated us to constantly improve and push for features that will give better service to the recipients. We also took our learning from and workshop used it to build and perfect our platform design and business model.

## What's next for MealShip
Other verticals such as groceries, prescription drugs, housing services, and other essential service options will be explored once a large enough user base is formed. We will also expand into brick-and-mortar kiosks and stores to address the digital accessibility barrier.
