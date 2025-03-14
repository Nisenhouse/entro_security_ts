const accessKeyPattern = /((AKIA|ASIA)[A-Z0-9]{16})/;
const secretKeyPattern = /([A-Za-z0-9/+=]{40})/;

function containsAwsAccessKey(data : string) : string {
  return getValues(data, accessKeyPattern);
}

function containsAwsSecretKey(data : string) : string {
  return getValues(data, secretKeyPattern);
}

function getValues(data : string, regexp : RegExp) : string {
    const match = regexp.exec(data);
    if (match == null) {
      return null;
    }
    return match[1];
}

export { containsAwsAccessKey, containsAwsSecretKey };