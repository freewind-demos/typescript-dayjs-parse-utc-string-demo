TypeScript DayJS Parse UTC string Demo
======================================

主要是对一个错误的UTC格式 `YYYY-MM-DDTHH:mm:ss[Z]` 看是否能正确解析。

正确写法是 `YYYY-MM-DDTHH:mm:ssZ`，不应该有方括号。否则会把它当成一个普通的字符`Z`，而不是UTC。

测试了四种情况：

1. 不使用插件，直接解析 `YYYY-MM-DDTHH:mm:ssZ`
2. 不使用插件，直接解析 `YYYY-MM-DDTHH:mm:ss[Z]`
3. 使用插件，解析 `YYYY-MM-DDTHH:mm:ssZ`
4. 使用插件，解析 `YYYY-MM-DDTHH:mm:ss[Z]`

发现最后一种情况会解析出不一样的时间，因为它是把Z去掉了，然后把`YYYY-MM-DDTHH:mm:ss`当作一个local time而不是UTC来解析。这会导致完全不一样的结果。

```
utcString 2024-01-02T03:04:05Z
no plugin, Z      2024-01-02T03:04:05.000Z
no plugin, [Z]    2024-01-02T03:04:05.000Z
with plugin, Z    2024-01-02T03:04:05.000Z
with plugin, [Z]  2024-01-01T19:04:05.000Z
```



```
npm install
npm start
```

