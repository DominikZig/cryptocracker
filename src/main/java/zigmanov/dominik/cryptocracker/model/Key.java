package zigmanov.dominik.cryptocracker.model;

public class Key
{
    private int cipherKey;

    public Key(int cipherKey)
    {
        this.cipherKey = cipherKey % 26;
    }

    public int getCipherKey()
    {
        return cipherKey;
    }

}
