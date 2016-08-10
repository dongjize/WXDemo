package com.dong.wxdemo.util;

/**
 * Description:
 * <p>
 * Author: dong
 * Date: 16/8/8
 */
public class AssertUtil {
    public static <T extends Exception> void throwIfNull(Object object, T e) throws T {
        if (object == null) {
            throw e;
        }
    }
}
