package de.brickshipper.brickshipbackendcore.order;

import java.util.Objects;

public class Name {
    private String first_name;
    private String last_name;
    private String full_name;

    public Name(String first_name, String last_name, String full_name) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.full_name = full_name;
    }

    public Name(String first_name, String last_name) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.full_name = first_name + ' ' + last_name;
    }

    public Name(String full_name) {
        this.full_name = full_name;
    }


    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getFull_name() {
        return full_name;
    }

    public void setFull_name(String full_name) {
        this.full_name = full_name;
    }


    @Override
    public String toString() {
        return "Name{" +
                "first_name='" + first_name + '\'' +
                ", last_name='" + last_name + '\'' +
                ", full_name='" + full_name + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Name name)) return false;
        return Objects.equals(first_name, name.first_name) && Objects.equals(last_name, name.last_name) && Objects.equals(full_name, name.full_name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(first_name, last_name, full_name);
    }
}
