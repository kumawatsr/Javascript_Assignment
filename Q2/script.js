function retryAJAXRequest(url, retries, retryInterval) {
  $.ajax({
    url: url,
    method: "GET",
    success: function (data) {
      // Handle successful response
      console.log("AJAX request succeeded:", data);
    },
    error: function (xhr, textStatus, errorThrown) {
      // Handle AJAX error
      console.error("AJAX request failed:", textStatus, errorThrown);

      // Retry if there are retries left
      if (retries > 0) {
        console.log("Retrying in " + retryInterval + "ms...");
        setTimeout(function () {
          retryAJAXRequest(url, retries - 1, retryInterval * 2);
        }, retryInterval);
      } else {
        console.error("Maximum retries reached. Request failed.");
        // Show an error message to the user or take other appropriate actions
      }
    },
  });
}

// Example usage:
const url = "https://api.example.com/data";
const maxRetries = 3;
const initialRetryInterval = 1000; // 1 second

retryAJAXRequest(url, maxRetries, initialRetryInterval);
