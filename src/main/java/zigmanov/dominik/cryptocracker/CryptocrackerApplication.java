package zigmanov.dominik.cryptocracker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import zigmanov.dominik.cryptocracker.model.CipherText;
import zigmanov.dominik.cryptocracker.model.Key;
import zigmanov.dominik.cryptocracker.model.PlainText;
import zigmanov.dominik.cryptocracker.service.CaesarService;

@SpringBootApplication
public class CryptocrackerApplication
{
	static Key testKey = new Key(3);

	static PlainText testPlainText = new PlainText("abcd");

	static CipherText testCipherText = new CipherText("");

	public static void main(String[] args)
	{
		SpringApplication.run(CryptocrackerApplication.class, args);

		CaesarService theService = new CaesarService();

		System.out.println(testKey.getCipherKey());
		System.out.println(testPlainText.getPlainText());
		System.out.println(theService.encryptMessage(testKey, testPlainText));

		testCipherText.setCipherText(theService.encryptMessage(testKey, testPlainText));

		System.out.println("Cipher:"+testCipherText.getCipherText());

		System.out.println(theService.decryptMessage(testKey, testCipherText));

	}
}
