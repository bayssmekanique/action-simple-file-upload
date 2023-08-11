# GitHub Action Simple File Transfer

This action performs a simple single file transfer using FTP.

## Usage
```yml
- name: Upload bundle
  uses: bayssmekanique/action-simple-file-upload@v1
  with:
    user: ${{ secrets.FTP_USER }}
    password: ${{ secrets.FTP_PASSWORD }}
    host: ${{ secrets.FTP_HOST }}
    src: dist/bundle.zip
    dest: archive/app/releaseBundle.zip
```

## Inputs

### `user`

**Required** The FTP user name. (recommended to store in Secrets)

### `password`

**Required** The FTP password. (recommended to store in Secrets)

### `host`

**Required** The hostname or IP address of the FTP server.

### `port`

**Optional** The FTP port of the server. (Default: `21`)

### `src`

**Required** The path to the file to upload.

### `dest`

**Required** Destination file path on FTP remote server. (can change file name)

## Copyright and License
© 2022 Zachary Cardoza under the [MIT license](LICENSE.md).