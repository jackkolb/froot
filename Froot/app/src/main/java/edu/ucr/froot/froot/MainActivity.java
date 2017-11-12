package edu.ucr.froot.froot;

import android.content.Intent;
import android.net.Uri;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Uri uri = Uri.parse("http://jackkolb.com/froot/");
        Intent intent = new Intent(Intent.ACTION_VIEW, uri);
        startActivity(intent);

//        WebView wv = (WebView) findViewById(R.id.wv);
//        WebSettings webSettings = wv.getSettings();
//        webSettings.setJavaScriptEnabled(true);
//        wv.loadUrl("http://jackkolb.com/froot/");
    }

    @Override
    protected void onStart() {
        super.onStart();
        Uri uri = Uri.parse("http://jackkolb.com/froot/");
        Intent intent = new Intent(Intent.ACTION_VIEW, uri);
        startActivity(intent);
    }

    @Override
    protected void onResume() {
        super.onResume();
        Uri uri = Uri.parse("http://jackkolb.com/froot/");
        Intent intent = new Intent(Intent.ACTION_VIEW, uri);
        startActivity(intent);
    }
}

