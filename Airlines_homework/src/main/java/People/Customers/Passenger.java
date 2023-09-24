package People.Customers;

import People.Person;

public class Passenger extends Person {
    private int numberOfBags;
    private final double weightOfBag;
    public Passenger(String name, int numberOfBags){
        super(name);
        this.numberOfBags = numberOfBags;
        this.weightOfBag = 10.0;
    }

    public int getNumberOfBags() {
        return numberOfBags;
    }

    public double getWeightOfBag(){
        return this.weightOfBag;
    }

    public void setNumberOfBags(int numberOfBags) {
        this.numberOfBags = numberOfBags;
    }
}
