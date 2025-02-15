// functions/hello.js
import axios from 'axios';

export default async function handler(request, response) {
  // response.status(200).json({
  //   body: request.body,
  //   query: request.query,
  //   cookies: request.cookies,
  // });

  // Your Launch App Deployment Hook URL
  const launchHookURL = "https://launch-api.contentstack.com/manage/deploy/67b0bb85a741c09c1d335299";

  try {
    const response = await axios.post(launchHookURL, {
      commit_id: event.data.version || "latest", // Send commit ID if available
      branch: "main" // Adjust based on your deployment branch
    });

    console.log("Deployment triggered:", response.data);
    return callback(null, response.data);
  } catch (error) {
    console.error("Deployment failed:", error);
    return callback(error);
  }
}
