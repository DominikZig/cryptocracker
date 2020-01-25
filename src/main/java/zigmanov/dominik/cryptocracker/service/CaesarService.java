package zigmanov.dominik.cryptocracker.service;

import org.springframework.stereotype.Service;
import zigmanov.dominik.cryptocracker.model.Key;
import zigmanov.dominik.cryptocracker.model.PlainText;

@Service("CaesarService")
public class CaesarService
{
    public static boolean isAlpha(Character c)
    {
        return Character.isLetter(c);
    }

    public String encryptMessage(Key theKey, PlainText thePlainText)
    {
        StringBuilder sb = new StringBuilder();

        System.out.println(theKey.getCipherKey());
        System.out.println(thePlainText.getPlainText());

        System.out.println(thePlainText.getPlainText().charAt(0));
        System.out.println(thePlainText.getPlainText().charAt(1));
        System.out.println(thePlainText.getPlainText().charAt(2));
        System.out.println(thePlainText.getPlainText().charAt(3));


        for (int i = 0; i < thePlainText.getPlainText().length(); i++)
        {
            if (isAlpha(thePlainText.getPlainText().charAt(i)) == true)
            {
                sb.append((thePlainText.getPlainText().charAt(i) - 'a' + theKey.getCipherKey()) % 26 + 'a');

                System.out.println(sb);
            }
            else
            {
                sb.append(thePlainText.getPlainText().charAt(i));

                System.out.println("else"+sb);
            }
        }

        System.out.println("Final text:"+sb.toString());

        return sb.toString();
    }

//    public String encryptMessage(int theKeyValue, String thePlainTextValue)
//    {
//        System.out.println("test");
//
//        String returnValue = "";
//
//        for (int i = 0; i < thePlainTextValue.length(); i++)
//        {
//            if (isAlpha(thePlainTextValue.charAt(i)) == true)
//            {
//                returnValue += (thePlainTextValue.charAt(i) - 'A' + theKeyValue) + 'A';
//
//                return returnValue;
//            }
//            else
//            {
//                returnValue += thePlainTextValue.charAt(i);
//
//                return returnValue;
//            }
//        }
//
//        return null;
//    }
}
