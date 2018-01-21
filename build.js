const s = require('shelljs');

s.rm('-rf', 'build');
s.mkdir('build');
s.cp('.env', 'build/.env');
s.cp('-R', 'public', 'build/public');
s.mkdir('-p', 'build/server/config/swagger');
s.cp('server/config/swagger/Api.yaml', 'build/server/config/swagger/Api.yaml');
