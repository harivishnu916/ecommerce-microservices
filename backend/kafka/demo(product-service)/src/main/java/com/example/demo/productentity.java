package com.example.demo;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "products")

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class productentity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String title;
    private String category;

    private Double price;

    private String image;

    // Common
    private String brand;
    private String model;
    private String screenSize;
    private String colour;
    private String hardDisk;
    private String cpu;
    private String ram;
    private String os;
    private String graphics;
    private String specialFeature;
    private String stock;

    // Earbuds / Earphones
    private String earPlacement;
    private String impedance;

    // Watches
    private String caseDiameter;
    private String watchMovementType;
    private String bandColour;
    private String bandMaterialType;
    private String warrantyType;
    private String itemWeight;
    private String connectivityTechnology;
    private String wirelessCommunicationStandard;
    private String gps;

    // Dresses
    private String neckStyle;
    private String fitType;
    private String closureType;
    private String materialComposition;
    private String sleeveType;
    private String style;
    private String countryOfOrigin;

    // Mobiles
    private String displayInfo;
    private String battery;
    private String camera;
    private String processor;
    private String cpuSpeed;

    // Bags
    private String occasionType;
    private String outerMaterial;
    private String careInstructions;
    private String numberOfPockets;
    private String closureTypeBag;
    private String variants;
}
