package org.example;

public enum PlaneType {
    Boeing747(250,248_000),
    AirbusA330(200,233_000),
    Saab2000(50,23_000);

    private final int capacity;
    private final double totalWeight;
    private final double bagSpace;
    PlaneType(int capacity,double totalWeight){
        this.capacity = capacity;
        this.totalWeight = totalWeight;
        this.bagSpace = totalWeight/2;

    }

    public int getCapacity() {
        return capacity;
    }

    public double getTotalWeight() {
        return totalWeight;
    }

    public double getBagSpace() {
        return bagSpace;
    }
}
