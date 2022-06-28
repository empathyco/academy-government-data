package com.empathy.co.indexgovernmentdataparser;

import jakarta.json.Json;
import jakarta.json.JsonReader;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;

@RestController
public class ParserController {
    @GetMapping("/index")
    public void indexDocuments(
            @RequestParam String bidsPath,
            @RequestParam String siteId,
            @RequestParam String clientToken) {

        try {
            URL url = new URL("http://localhost:8080/jobs/submit/" + siteId + "/" + clientToken + "/catalog");

            HttpURLConnection con = (HttpURLConnection) url.openConnection();

            con.setRequestMethod("POST");

            con.setRequestProperty("Content-Type", "application/json");

            con.setRequestProperty("Accept", "application/json");

            con.setDoOutput(true);

            String jsonContent = Json.createArrayBuilder().add(Json.createObjectBuilder().add("title", "ªsdfhfsdgfhfd").build())
                    .add(Json.createObjectBuilder().add("title", "dfsgsfddsfg").build()).build().toString();

            //InputStream inputStream = new FileInputStream(bidsPath);

            try(OutputStream os = con.getOutputStream()) {
                byte[] input = jsonContent.getBytes(StandardCharsets.UTF_8);
                os.write(input, 0, input.length);
            }

            con.getInputStream();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
