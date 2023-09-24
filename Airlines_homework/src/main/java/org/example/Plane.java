package org.example;

public class Plane {
    private final PlaneType type;

    public Plane(PlaneType type){
        this.type = type;
    }

    public PlaneType getType() {
        return type;
    }

    public int getPlaneCapacity(){
        return type.getCapacity();
    }

    public double getPlateTotalWeight(){
        return this.type.getTotalWeight();
    }
}
