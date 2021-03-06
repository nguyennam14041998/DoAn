package com.api.doan.config;

import java.time.Duration;

import org.ehcache.config.builders.*;
import org.ehcache.jsr107.Eh107Configuration;

import org.hibernate.cache.jcache.ConfigSettings;
import io.github.jhipster.config.JHipsterProperties;

import org.springframework.boot.autoconfigure.cache.JCacheManagerCustomizer;
import org.springframework.boot.autoconfigure.orm.jpa.HibernatePropertiesCustomizer;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.*;

@Configuration
@EnableCaching
public class CacheConfiguration {

    private final javax.cache.configuration.Configuration<Object, Object> jcacheConfiguration;

    public CacheConfiguration(JHipsterProperties jHipsterProperties) {
        JHipsterProperties.Cache.Ehcache ehcache = jHipsterProperties.getCache().getEhcache();

        jcacheConfiguration = Eh107Configuration.fromEhcacheCacheConfiguration(
            CacheConfigurationBuilder.newCacheConfigurationBuilder(Object.class, Object.class,
                ResourcePoolsBuilder.heap(ehcache.getMaxEntries()))
                .withExpiry(ExpiryPolicyBuilder.timeToLiveExpiration(Duration.ofSeconds(ehcache.getTimeToLiveSeconds())))
                .build());
    }

    @Bean
    public HibernatePropertiesCustomizer hibernatePropertiesCustomizer(javax.cache.CacheManager cacheManager) {
        return hibernateProperties -> hibernateProperties.put(ConfigSettings.CACHE_MANAGER, cacheManager);
    }

    @Bean
    public JCacheManagerCustomizer cacheManagerCustomizer() {
        return cm -> {
            createCache(cm, com.api.doan.repository.UserRepository.USERS_BY_LOGIN_CACHE);
            createCache(cm, com.api.doan.repository.UserRepository.USERS_BY_EMAIL_CACHE);
            createCache(cm, com.api.doan.domain.User.class.getName());
            createCache(cm, com.api.doan.domain.Authority.class.getName());
            createCache(cm, com.api.doan.domain.User.class.getName() + ".authorities");
            createCache(cm, com.api.doan.domain.Donvi.class.getName());
            createCache(cm, com.api.doan.domain.Donvi.class.getName() + ".nhansus");
            createCache(cm, com.api.doan.domain.Linhvuc.class.getName());
            createCache(cm, com.api.doan.domain.Linhvuc.class.getName() + ".detais");
            createCache(cm, com.api.doan.domain.Capdetai.class.getName());
            createCache(cm, com.api.doan.domain.Capdetai.class.getName() + ".detais");
            createCache(cm, com.api.doan.domain.Chucdanh.class.getName());
            createCache(cm, com.api.doan.domain.Chucdanh.class.getName() + ".nhansus");
            createCache(cm, com.api.doan.domain.Hocham.class.getName());
            createCache(cm, com.api.doan.domain.Hocham.class.getName() + ".nhansus");
            createCache(cm, com.api.doan.domain.Nhansu.class.getName());
            createCache(cm, com.api.doan.domain.Nhansu.class.getName() + ".chunhiems");
            createCache(cm, com.api.doan.domain.Nhansu.class.getName() + ".detais");
            createCache(cm, com.api.doan.domain.Chunhiem.class.getName());
            createCache(cm, com.api.doan.domain.Coquanphoihop.class.getName());
            createCache(cm, com.api.doan.domain.Coquanphoihop.class.getName() + ".detais");
            createCache(cm, com.api.doan.domain.Nguonkinhphi.class.getName());
            createCache(cm, com.api.doan.domain.Nguonkinhphi.class.getName() + ".detais");
            createCache(cm, com.api.doan.domain.Detai.class.getName());
            createCache(cm, com.api.doan.domain.Detai.class.getName() + ".dutoanKPS");
            createCache(cm, com.api.doan.domain.Detai.class.getName() + ".tiendos");
            createCache(cm, com.api.doan.domain.Detai.class.getName() + ".danhgias");
            createCache(cm, com.api.doan.domain.Detai.class.getName() + ".coquanphoihops");
            createCache(cm, com.api.doan.domain.Detai.class.getName() + ".nguonkinhphis");
            createCache(cm, com.api.doan.domain.Detai.class.getName() + ".nhansus");
            createCache(cm, com.api.doan.domain.DutoanKP.class.getName());
            createCache(cm, com.api.doan.domain.DutoanKP.class.getName() + ".dutoanKPCTS");
            createCache(cm, com.api.doan.domain.DutoanKPCT.class.getName());
            createCache(cm, com.api.doan.domain.NoidungDT.class.getName());
            createCache(cm, com.api.doan.domain.NoidungDT.class.getName() + ".dutoanKPCTS");
            createCache(cm, com.api.doan.domain.Tiendo.class.getName());
            createCache(cm, com.api.doan.domain.Danhgia.class.getName());
            createCache(cm, com.api.doan.domain.Danhgia.class.getName() + ".danhgiaCTS");
            createCache(cm, com.api.doan.domain.DanhgiaCT.class.getName());
            createCache(cm, com.api.doan.domain.DanhgiaCT.class.getName() + ".noidungdanhgias");
            createCache(cm, com.api.doan.domain.Noidungdanhgia.class.getName());
            createCache(cm, com.api.doan.domain.Hoidongdanhgia.class.getName());
            createCache(cm, com.api.doan.domain.Hoidongdanhgia.class.getName() + ".detais");
            createCache(cm, com.api.doan.domain.Hoidongdanhgia.class.getName() + ".thanhvienHDS");
            createCache(cm, com.api.doan.domain.ThanhvienHD.class.getName());
            // jhipster-needle-ehcache-add-entry
        };
    }

    private void createCache(javax.cache.CacheManager cm, String cacheName) {
        javax.cache.Cache<Object, Object> cache = cm.getCache(cacheName);
        if (cache != null) {
            cm.destroyCache(cacheName);
        }
        cm.createCache(cacheName, jcacheConfiguration);
    }

}
