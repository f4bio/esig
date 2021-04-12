# blog

> my blog

## login

`$ docker login registry.gitlab.com`

### build image

`$ docker build --no-cache -t registry.gitlab.com/f4b.io/esig .`

## push image

`$ docker push registry.gitlab.com/f4b.io/esig`

## signature

```html
<div style=\"font-family: Arial, sans-serif;\">
    <p style=\"color: rgb(68, 68, 68); font-size: 1.2em; font-weight: bold\">
      {{ user.name }}
    </p>
    <p style=\"color: rgb(51, 204, 204); font-size: 1.3em; font-weight: bold\">
      {{ user.position }}
    </p>
  <p>
    <ul style=\"list-style: none; font-size: 0.8em; margin-left: 0; padding-left: 0;\">
        <li>
            <span style=\"color: #999999\">Mobile:</span>
            <a href=\"{{ phone.url }}\" target=\"_blank\">{{ phone.pretty }}</a>
        </li>
        <li>
            <span style=\"color: #999999\">E-Mail:</span>
            <a href=\"{{ email.url }}\" target=\"_blank\">{{ email.pretty }}</a>
        </li>
        <li>
            <span style=\"color: #999999\">Website:</span>
            <a href=\"{{ website.url }}\" target=\"_blank\">{{ website.pretty }}</a>
        </li>
    </ul>
  </p>
  <p style=\"color: rgb(51, 204, 204); font-size: 1.3em; font-weight: bold\">
      Digital Venture Consultants
  </p>
  <p>
    <ul style=\"list-style: none; font-size: 0.7em; margin-left: 0; padding-left: 0;\">
        <li>
            <span style=\"color: #999999\">ZiTOS GmbH</span>
        </li>
        <li>
            <span style=\"color: #999999\">Am Silberberg 16</span>
        </li>
        <li>
            <span style=\"color: #999999\">65510 Hünstetten</span>
        </li>
        <li>
            <span style=\"color: #999999\">
                <a href=\"https://dvc.ventures/imprint/\" target=\"_blank\">Impressum</a>
                &amp
                <a href=\"https://dvc.ventures/privacy-policy/\" target=\"_blank\">Datenschutz</a>
            </span>
        </li>
  </p>
</div>
```
