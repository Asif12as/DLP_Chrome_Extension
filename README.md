**Data Loss Prevention (DLP) Browser Extension**

**Overview**

This project is a Data Loss Prevention (DLP) browser extension designed to block file uploads and downloads on unapproved websites, display user notifications, and allow customizable rules for approved websites and file types.

**Features**

Block Upload and Download: Prevents files with specific extensions (e.g., .pdf, .docx, .xls) from being uploaded or downloaded on unapproved websites.

**Customizable Rules**: 
Users can configure approved websites and file types in real time.

**User Notifications:** 
Displays a clear alert explaining the reason for any blocked action.

**Pre-configured Blocked Sites:** 
Includes pre-blocked sites such as YouTube, Facebook, Netflix, Roblox, Discord, and Spotify.

**Project Structure**

**JavaScript**

Implements core functionality for detecting file uploads and downloads.
Dynamically applies blocking rules based on the user's configuration.
Modifies DOM elements to display custom notifications when actions are blocked.

**HTML**

Provides the structure for the extension's popup and notifications.
Displays the list of blocked websites and allows users to manage settings easily.

**CSS**

Ensures a visually appealing and consistent design.
Styles the popup and user notifications for better usability and readability.
Adds animations to enhance user experience.

**Installation**

**Clone the repository:**

git clone https://github.com/yourusername/DLP_Chromw_Extension.git

**Navigate to the project directory:**

cd dlp-browser-extension

Load the extension in your browser:

Open your browser's extensions page (e.g., chrome://extensions/ in Chrome).

Enable "Developer mode."
Click "Load unpacked" and select the project directory.

**Usage**

Open the extension popup by clicking on the browser extension icon.

View the list of pre-configured blocked sites or add your own.

Attempting to upload or download blocked files will trigger a notification.

Modify the approved sites and file types in real time through the settings.

Contributing

**Contributions are welcome! Please follow these steps:**

Fork the repository.
Create a new branch for your feature or bug fix:
git checkout -b feature-name

Commit your changes:
git commit -m "Add new feature"

Push to your branch:
git push origin feature-name
Open a pull request on GitHub.

License

This project is licensed under the MIT License.

Acknowledgments

Open Sans for typography.

Inspiration from productivity tools and DLP solutions.......
