package com.nearaura.app;

import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;
import com.firebase.geofire.GeoFire;
import com.firebase.geofire.GeoLocation;
import com.firebase.geofire.GeoQuery;
import com.firebase.geofire.GeoQueryEventListener;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;

public class MainActivity extends AppCompatActivity {
    private GeoFire geoFire;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(android.R.layout.activity_list_item);

        DatabaseReference ref = FirebaseDatabase.getInstance().getReference("locations");
        geoFire = new GeoFire(ref);

        GeoQuery geoQuery = geoFire.queryAtLocation(new GeoLocation(37.7832, -122.4056), 1.0);
        geoQuery.addGeoQueryEventListener(new GeoQueryEventListener() {
            @Override public void onKeyEntered(String key, GeoLocation location) {}
            @Override public void onKeyExited(String key) {}
            @Override public void onKeyMoved(String key, GeoLocation location) {}
            @Override public void onGeoQueryReady() {}
            @Override public void onGeoQueryError(DatabaseError error) {}
        });
    }
}